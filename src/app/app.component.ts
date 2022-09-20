import { Component, OnInit } from '@angular/core';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import {UsersService } from "./users/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit{

  title = 'app-js';
constructor(private usersService: UsersService){

  console.log('el componente se ha creado')
}
  ngOnInit(): void {
    console.log('el componente se ha iniciado ');
    this.usersService.getUsers()
    .subscribe(response => console.log(response));
  }
  
}
