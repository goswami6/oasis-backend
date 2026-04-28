import { Model } from 'mongoose';
import { Inquiry, InquiryDocument } from './schemas/inquiry.schema';
export declare class InquiryService {
    private inquiryModel;
    constructor(inquiryModel: Model<InquiryDocument>);
    create(createInquiryDto: any): Promise<Inquiry>;
    findAll(): Promise<Inquiry[]>;
    updateStatus(id: string, status: string): Promise<Inquiry | null>;
    updateKycStatus(id: string, kycStatus: string, kycFeedback?: string): Promise<Inquiry | null>;
    findOne(id: string): Promise<Inquiry | null>;
    remove(id: string): Promise<any>;
}
