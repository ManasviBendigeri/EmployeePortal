import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeArray:any =[];
editState: boolean =false;
empEdit:any;



  constructor(private afd: AngularFireDatabase) {}
  ngOnInit(): void {
    this.afd.object('/employees').valueChanges().subscribe(employeeArray =>{
      this.employeeArray = Object.values(employeeArray);
      console.log(this.employeeArray);
    })
     /*firebase.database() .ref('employees').on("value", function (snapshot) {
      const employeeList = snapshot.val();
      const Array = Object.values(employeeList);
      Array.forEach(element => {
        console.log(element);
        this.employeeArray.push(element);
        console.log(this.employeeArray);
      });
    })*/
  }

  editEmp(event, employee){
    this.editState = true;
    this.empEdit = employee;
  }

//   updateEmp(employee){
//     this.employeeService.updateEmp(employee);
// this.clearState();
//   }
clearState(){
this.editState = false;
this.empEdit = null;
}

}