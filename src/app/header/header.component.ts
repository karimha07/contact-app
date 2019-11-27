import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contacts/shared/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  onSearch(event) {
    this.contactService.onFilter(event.target.value);
  }

constructor(private contactService: ContactService) { }

  ngOnInit() {
  }


}
