import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contacts/contacts-list/contact-detail/contact-detail.component';
import { ContactComponent } from './contacts/contacts-list/contact/contact.component';
import { ContactEditComponent } from './contacts/contacts-list/contact-edit/contact-edit.component';
import { FavoriteContactsComponent } from './contacts/favorite-contacts/favorite-contacts.component';
import { DropdownDirective } from './contacts/shared/dropdown.directive';
import { ContactService } from './contacts/shared/contact.service';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactDetailComponent,
    ContactComponent,
    ContactEditComponent,
    FavoriteContactsComponent,
    DropdownDirective,
    ContactStartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
