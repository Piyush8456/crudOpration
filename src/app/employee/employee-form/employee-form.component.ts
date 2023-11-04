import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  dropdownData: any[] = [];
  settings: IDropdownSettings = {};
  form!: FormGroup;
  selectedItems: any[] = [];
  employees: Employee[] = [];
  disable: boolean = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    department: new FormControl('', Validators.required),
    number: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
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

  addEmployee() {
    const { department, designation, number, name } = this.employeeForm.value;

    if (department && designation && number && name) {
      this.employeeService.addEmployee({
        name: name,
        department: department,
        number: number,
        designation: designation.map((i) => i?.name),
      });
      this.router.navigate(['']);
    } else alert('Form is invalid');
  }
}
