import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FavoriteContactsComponent } from './contacts/favorite-contacts/favorite-contacts.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { ContactDetailComponent } from './contacts/contacts-list/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contacts-list/contact-edit/contact-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
   {path: '', redirectTo: '/contacts', pathMatch: 'full' },
   {path: 'contacts', component: ContactsComponent, children: [
      { path: '', component: ContactStartComponent},
      { path: ':id', component: ContactDetailComponent },
   ] },
   { path: 'newContact', component: ContactEditComponent},
   { path: 'edit/:id', component: ContactEditComponent},
   {path: 'favorite-contacts', component: FavoriteContactsComponent, children: [
      {path: ':id', component: ContactEditComponent }
   ] },
   { path: 'not-found', component: PageNotFoundComponent},
   { path: '**', redirectTo: '/not-found' }

 ];
@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
})
export class AppRoutingModule {

}
