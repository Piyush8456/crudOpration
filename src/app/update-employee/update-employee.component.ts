import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Employee } from '../employee/employee';
import { EmployeesService } from '../employee/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  dropdownData: any[] = [];
  settings: IDropdownSettings = {};
  form!: FormGroup;
  selectedItems: any[] = [];
  employees: Employee[] = [];
  disable: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee },
    private fb: FormBuilder,
    private employeeService: EmployeesService,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateEmployeeComponent>
  ) {
    this.employeeForm.patchValue({
      ...this.data.employee,
      designation: this.data.employee.designation.map((i) => ({ name: i })),
    });
  }

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    department: new FormControl('', Validators.required),
    number: new FormControl('+91', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(13),
    ]),
    designation: new FormControl([] as { name: string }[], [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    this.dropdownData = [
      { name: 'Trainee' },
      { name: 'Software engineer' },
      { name: 'Senior software engineer' },
      { name: 'Technical lead' },
      { name: 'Manager' },
    ];
    this.settings = {
      idField: 'name',
      textField: 'name',
    };
    this.form = this.fb.group({
      myItems: [this.selectedItems],
    });
  }

  get name() {
    return this.employeeForm.get('name');
  }
  get department() {
    return this.employeeForm.get('department');
  }
  get number() {
    return this.employeeForm.get('number');
  }
  get designation() {
    return this.employeeForm.get('designation');
  }

  employeeData() {
    console.log(this.employeeForm.value.name);
  }

  editEmployee() {
    const { department, designation, number, name } = this.employeeForm.value;
    if (department && designation && number && name) {
      this.dialogRef.close({
        name: name,
        department: department,
        number: number,
        designation: designation.map((i) => i?.name),
      });
    }
  }
}
