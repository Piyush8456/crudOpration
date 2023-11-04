import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: Employee[] = [];

  constructor() {
    this.getEmployee();
  }

  getEmployee() {
    let emp = localStorage.getItem('employee');
    if (emp !== null) {
      this.employees = JSON.parse(emp!);
    }
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.saveToLocalStorage();
  }

  editEmployee(index: number, employee: Employee) {
    this.employees[index] = employee;
    this.saveToLocalStorage();
  }

  removeEmployee(i: number) {
    this.employees.splice(i, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('employee', JSON.stringify(this.employees));
  }
}
