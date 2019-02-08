import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

//decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {
//ts
  constructor( private http : Http) { }

  //1. received data from add contact form
  create(contactData : object){
    console.log(contactData);

    //2.send data to rest api
    return this.http.post('https://jsonplaceholder.typicode.com/users',contactData)
            .pipe(map( (response) => {
              console.log(response)    //3 . receive response from rest api
              return response.json();       //4.send it back to component
            })
          );
  }

  getContacts(){
    //1. send request to get all contacts
   return  this.http.get('https://jsonplaceholder.typicode.com/users')
              .pipe(map( (response) => {
                console.log(response)    //2 . receive response from rest api
                return response.json();       //3.send it back to component
              })
            );
  }

  getContactById(id){
    return  this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
                    .pipe(map( (response) => {
                      console.log(response)    //2 . receive response from rest api
                      return response.json();       //3.send it back to component
                    })
                  );
  }

  updateContact(editableData){
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+editableData.id,editableData)
              .pipe(map( (response) => {
                console.log(response)    //2 . receive response from rest api
                return response.json();       //3.send it back to component
              })
            );
  }
}
