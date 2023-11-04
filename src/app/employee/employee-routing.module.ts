import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [{ path: 'register', component: EmployeeFormComponent }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
