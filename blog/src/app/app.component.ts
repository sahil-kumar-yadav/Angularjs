import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,StudentListComponent,CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  fname = "Sahil";
  lname = "Yadav";
  fun(){
    return "this is function";
  }
  getname(){
    alert("Get name function called") ;
  }
  getNumber(num:string){
    alert(num)
  }
}
