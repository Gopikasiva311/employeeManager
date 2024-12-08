import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: 'C:\\Users\\Gopikashiva\\Documents\\WEB_DEVELOPMENT\\employeemanagerapp\\src\\app\\app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
