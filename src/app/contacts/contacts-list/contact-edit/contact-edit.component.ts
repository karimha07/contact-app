import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Contact } from '../../shared/contact.model';
import { ContactService } from '../../shared/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  id: number;
  editMode = false;
  @ViewChild('imagePath' , {static: true}) fileUpload: ElementRef;
  contactForm: FormGroup;
  idd = 'id';

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params[this.idd];
        this.editMode = params[this.idd] != null;
        this.initForm();
      }
    );
  }

  onLoadServers() {
    // complex calculation
    setTimeout(() => {
      this.router.navigate(['../']);
     }, 50);
    }

  onSubmit() {
    if (this.editMode) {
      this.contactService.updateContact(this.id, this.contactForm.value);
    } else if (!this.contactService.isPhoneTaken(this.id, this.contactForm.value.phoneNumber)) {
      this.contactService.addContact(this.contactForm.value) ;
    } else { alert('phone number is in your contacts list'); }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }

  onUploadFile(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newForm = Object.assign({}, this.contactForm.value);
        this.contactForm.setValue({
          ...newForm,
          imagePath: e.target.result
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  private initForm() {
    let contactName = '';
    let contactLastName = '';
    let contactEmail = '';
    let contactPhoneNumber = null ;
    let contactImagePath = '';

    if (this.editMode) {
      const contact = this.contactService.getContact(this.id);
      contactName = contact.name;
      contactLastName = contact.lastName;
      contactEmail = contact.email;
      contactPhoneNumber = contact.phoneNumber;
      contactImagePath = contact.imagePath;
    }

    this.contactForm = new FormGroup({
      name: new FormControl(contactName, Validators.required),
      lastName: new FormControl(contactLastName, Validators.required),
      email: new FormControl(contactEmail, Validators.required),
      phoneNumber: new FormControl(contactPhoneNumber, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]+')  // validates input is digit
      ]),
      imagePath : new FormControl(contactImagePath, Validators.required)
    });
  }

}
