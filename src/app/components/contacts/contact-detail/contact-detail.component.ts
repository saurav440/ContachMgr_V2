import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from 'src/app/services/contact.service'
import { Params } from '@angular/router/src/shared';


declare var $:any 
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styles: []
})
export class ContactDetailComponent implements OnInit {

  contactData :object ={}
  editableContactData :object={}
  contactId: number;
  isSaved:boolean;

  constructor(private contactService :ContactService,private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    //0. get id of user
    this.activatedRoute.params.subscribe((queryParms :Params) => {
                  this.contactId = queryParms.id
    })

    this.contactService.getContactById(this.contactId)
                        .subscribe( (resp) => {
                          this.contactData = resp;
                      });
  }

  launchEditModel(){
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData))
    $('#editModel').modal('show');
  }

  editContactHandler(){
       this.contactService.updateContact(this.editableContactData)
            .subscribe((resp) => {
              this.isSaved = true;  //if else statement for capturing success failure
              setTimeout(() =>{
                $('#editModel').modal('hide');  //hide model thru js
                this.contactData = resp;
               },3000)
              });
  }
}
