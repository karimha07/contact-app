import { Component, OnInit, Input, } from '@angular/core';
import { Contact } from '../../shared/contact.model';
import { stringify } from 'querystring';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@Input() contact: Contact;
@Input() index: number;
display = false;

  ngOnInit() {
  }

}
