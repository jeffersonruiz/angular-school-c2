

export class Contact {
    constructor(
        public id: number,
        public name: string,
        public picture?: string,
        public phones?: ContactPhoneI[],
        public email?: string,
        public direction?: string,
    ) {

    }
}

export enum PhoneTypes {
    Mobile = 'mobile',
    Home = 'home',
    Work = 'work'
}

export interface ContactPhoneI {
    type: PhoneTypes;
     number: number;
}