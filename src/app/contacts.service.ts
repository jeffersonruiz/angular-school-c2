import { Injectable } from '@angular/core';
import { Contact, PhoneTypes } from './contact.models';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    constructor() {}

    getContacts() {
        return [
            new Contact(1, 'Jefferson', 'assets/default-user.png'),
            new Contact(2, 'Nathalia', 'assets/default-user.png', [{type: PhoneTypes.Mobile, number: 1234}]),
            new Contact(3, 'Nicol', 'assets/default-user.png', [
                {type: PhoneTypes.Mobile, number: 1234},
                {type: PhoneTypes.Work, number: 567}
            ], 'prueba@hotmail.com'),
            new Contact(4, 'Martha', 'assets/default-user.png', [
                {type: PhoneTypes.Mobile, number: 789},
                {type: PhoneTypes.Home, number: 1011}
            ], 'prueba@hotmail.com', 'Calle 123')
        ];
    }
}
