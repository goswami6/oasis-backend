import { Model } from 'mongoose';
import { Contact, ContactDocument } from './schemas/contact.schema';
export declare class ContactService {
    private contactModel;
    constructor(contactModel: Model<ContactDocument>);
    create(createContactDto: any): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    updateStatus(id: string, status: string): Promise<Contact | null>;
}
