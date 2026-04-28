import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(createContactDto: any): Promise<import("./schemas/contact.schema").Contact>;
    findAll(): Promise<import("./schemas/contact.schema").Contact[]>;
    updateStatus(id: string, status: string): Promise<import("./schemas/contact.schema").Contact | null>;
}
