import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../../shared/contact.model';
import { ContactService } from '../../shared/contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: number;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.contact = this.contactService.getContact(this.id);
        }
      );
  }

  onEdit() {
    if (this.contactService.isFav(this.id)) {
      this.router.navigate(['favorite-contacts', this.contactService.getFavoriteIndex(this.id)], {fragment: 'fav'});
    } else { this.router.navigate(['edit', this.id]);
    }
  }

  onDelete() {
    if (confirm('Are you sure you want to delete?')) {
      this.contactService.deleteContact(this.contact.phoneNumber);
    }
    this.router.navigate(['/contacts']);
  }

  onAddFav() {
    if (!this.contactService.isFav(this.id)) {
      this.contact = this.contactService.getContact(this.id);
      this.contactService.reverseFavoriteContact(this.id);
      this.router.navigate(['favorite-contacts']); }
  }

  isFavorite() {
    return this.contactService.isFav(this.id);
  }
}
