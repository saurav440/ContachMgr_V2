import { Component,ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements AfterViewInit {

  appName = 'contact-mgr';
  personName ="Saurav";
  
  constructor() { }

  ngAfterViewInit() {
  }

  visitedDate:any;
  printLastVisit(evt){
    this.visitedDate = evt;
  }

}
