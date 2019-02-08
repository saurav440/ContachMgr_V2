import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {

  isLoggedIn:boolean;
  skillSetList: Array<string>;
  constructor() { 
    this.isLoggedIn = true;
    this.skillSetList = ["ng", "react", "nodeJs"]
  }

  ngOnInit() {
  }

}
