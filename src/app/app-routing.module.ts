import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LeavesComponent } from './leaves/leaves.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { FilesComponent } from './files/files.component';
import { AngularFireModule } from '@angular/fire';
import { MainComponent} from './main/main.component';
import { AdminComponent} from'./admin/admin.component';
import { RemComponent} from './rem/rem.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
 

import { FormControlDirective } from '@angular/forms';
import { from } from 'rxjs';

const routes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'leaves', component: LeavesComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: 'files', component: FilesComponent},
  {path: 'main', component: MainComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'rem', component: RemComponent},
  
  {path: 'employeeadd', component: EmployeeAddComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'salaryslip', component: SalarySlipComponent},
  {path: '', component: IndexComponent},
  {path: '', redirectTo: '/', pathMatch:'full'},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule,
    AngularFireModule
  ]
})

export class AppRoutingModule { }