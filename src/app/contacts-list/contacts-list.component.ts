import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Contact } from '../contact.models';
import { ContactsService } from '../contacts.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, AfterViewInit {

  @ViewChildren(ContactComponent) contactComponent: QueryList<ContactComponent>;
  public selectedContact: number = null;
  public contacts: Contact[] = [];
  constructor(public contactService: ContactsService) { }


  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  ngAfterViewInit(): void {
    this.contactComponent.forEach( item => {
      console.log(item);
    })
  }

  onContactSelected(id: number) {
    this.selectedContact = id;
    this.contactComponent.forEach( item =>{
      if ( item.contact.id === this.selectedContact) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = false;
      }
    })
  }

}
