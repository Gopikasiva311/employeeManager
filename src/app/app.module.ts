import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
