import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConformationComponent } from 'src/app/delete-conformation/delete-conformation.component';
import { UpdateEmployeeComponent } from 'src/app/update-employee/update-employee.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  removeEmployee: any = [];

  constructor(
    private employeeService: EmployeesService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.employees = this.employeeService.employees;
    console.log(this.employees, 'emp aryyy');
  }
  openDialog(i: number): void {
    const dialogRef = this.dialog.open(DeleteConformationComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.employeeService.removeEmployee(i);
      }
    });
  }

  updateEmployee(i: number) {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '450px',
      data: { employee: this.employees[i] },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.name) {
        this.employeeService.editEmployee(i, result);
      }
    });
  }
}
