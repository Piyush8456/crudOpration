import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EmployeeModule } from './employee/employee.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteConformationComponent } from './delete-conformation/delete-conformation.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DeleteConformationComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    EmployeeModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
