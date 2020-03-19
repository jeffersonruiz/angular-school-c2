import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() expanded = false;
  @Output() clicked: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clicked.emit(this.contact.id);
  }

}
