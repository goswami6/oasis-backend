import { InquiryService } from './inquiry.service';
export declare class InquiryController {
    private readonly inquiryService;
    constructor(inquiryService: InquiryService);
    create(createInquiryDto: any, files: {
        aadharFront?: Express.Multer.File[];
        aadharBack?: Express.Multer.File[];
        panImage?: Express.Multer.File[];
    }): Promise<{
        success: boolean;
        data: import("./schemas/inquiry.schema").Inquiry;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: import("./schemas/inquiry.schema").Inquiry[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("./schemas/inquiry.schema").Inquiry | null;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    updateStatus(id: string, status: string): Promise<{
        success: boolean;
        data: import("./schemas/inquiry.schema").Inquiry | null;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    updateKycStatus(id: string, kycStatus: string, kycFeedback?: string): Promise<{
        success: boolean;
        data: import("./schemas/inquiry.schema").Inquiry | null;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
}
