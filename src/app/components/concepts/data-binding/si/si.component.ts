import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  appName:string = "Contact Manager App";
  developedIn : number = 2018;
  myProfile : object={
    Name:"Saurav",
    City : "Bangalore"
  }
  skillset :string[] =['ng','react','nodejs']
  constructor() { }

  ngOnInit() {
  }

}
