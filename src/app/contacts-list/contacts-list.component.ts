import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact.models";
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];
  constructor(public contactService:ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
