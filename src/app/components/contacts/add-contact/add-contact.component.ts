import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactService} from 'src/app/services/contact.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  contactData: object = {
    username :'saurav',
    phone : '',
    emial: ''
  }
  status:string;
  constructor( private contactService :ContactService, private router :Router) { }

  ngOnInit() {
  }
  submitHandler(formData: NgForm){
    
   // console.log(formData);
    //1. receive data from form
    //2. send same data to services
    this.contactService.create(formData.value)
          .subscribe( response => {
            console.log(response);
            this.status = "records created successpully"

            //reditrect after 3 sec
            setTimeout(() => {
            this.router.navigate(['contacts']);
            },3000)
          });
  }

}
