import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { AngularFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { LeavesComponent } from './leaves/leaves.component';
import { MeetingsComponent } from './meetings/meetings.component'; 
import { AuthService } from './login/auth.service';
import { FilesComponent } from './files/files.component';
import { RemComponent } from './rem/rem.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LeavesComponent,
    MeetingsComponent,
    FilesComponent,
    RemComponent,
    MainComponent,
    AdminComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    SalarySlipComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    
    
  
    

  
    BrowserAnimationsModule,

    AngularFireModule,
    //AngularFirestore,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1CH4tZsw3AluVQlPLkBK0ekBjTTuw43I",
      authDomain: "employee4-6f5cd.firebaseapp.com",
      databaseURL: "https://employee4-6f5cd.firebaseio.com",
      projectId: "employee4-6f5cd",
      storageBucket: "employee4-6f5cd.appspot.com",
      messagingSenderId: "629926120376",
      appId: "1:629926120376:web:d2534c203e9c43ce44dd4d"

    },
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

