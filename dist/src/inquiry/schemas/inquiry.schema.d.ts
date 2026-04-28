import { Document } from 'mongoose';
export type InquiryDocument = Inquiry & Document;
export declare class Inquiry {
    name: string;
    email: string;
    phone: string;
    model: string;
    location: string;
    investment: string;
    businessBackground: string;
    status: string;
    aadharNumber: string;
    panNumber: string;
    siteVisitConsent: boolean;
    aadharFront: string;
    aadharBack: string;
    panImage: string;
    kycStatus: string;
    kycFeedback: string;
}
export declare const InquirySchema: import("mongoose").Schema<Inquiry, import("mongoose").Model<Inquiry, any, any, any, any, any, Inquiry>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Inquiry, Document<unknown, {}, Inquiry, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    model?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    investment?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    businessBackground?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    aadharNumber?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    panNumber?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    siteVisitConsent?: import("mongoose").SchemaDefinitionProperty<boolean, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    aadharFront?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    aadharBack?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    panImage?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    kycStatus?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    kycFeedback?: import("mongoose").SchemaDefinitionProperty<string, Inquiry, Document<unknown, {}, Inquiry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Inquiry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Inquiry>;
