import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  dateOfLastVisit:any;
  @Output() findLastVisit = new EventEmitter<string>();

  constructor() { 
    this.dateOfLastVisit = new Date();
  }

  ngOnInit() {
  }
  sendDataToParent(){
    console.log(this.dateOfLastVisit)
    //emit the custome event with data
    this.findLastVisit.emit(this.dateOfLastVisit);
  }

}
