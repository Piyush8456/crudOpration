import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EmployeesComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSlideToggleModule,
    MatButtonModule,
  ],
})
export class EmployeeModule {
  constructor() {}
}
