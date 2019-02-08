import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
    `
    .redText{
      color:red;
    }
    .greenText{
      color:green;
    }
    `
  ]
})
export class PbComponent implements OnInit {

  firstName ="Saurav";
  isDisabled: boolean = true
 
  constructor() { }

  ngOnInit() {
  }
  isLoggedIn(){
    return true
  }
}
