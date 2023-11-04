import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'register', component: EmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
