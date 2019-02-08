import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from 'src/app/components/concepts/concepts.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AddContactComponent } from 'src/app/components/contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from 'src/app/components/contacts/contact-detail/contact-detail.component';

const routes: Routes = [
  {path :'',component: ConceptsComponent},
  {path :'contacts',component: ContactsComponent},
  {path :'contacts/new',component: AddContactComponent},
  {path :'contacts/:id',component: ContactDetailComponent},
  {path :'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
