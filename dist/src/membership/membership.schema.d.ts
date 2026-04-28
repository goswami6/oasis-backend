import { Document } from 'mongoose';
export type MembershipDocument = Membership & Document;
export declare class Membership {
    tier: string;
    tag: string;
    amount: number;
    perks: string[];
    glow: string;
    border: string;
    featured: boolean;
}
export declare const MembershipSchema: import("mongoose").Schema<Membership, import("mongoose").Model<Membership, any, any, any, any, any, Membership>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Membership, Document<unknown, {}, Membership, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tier?: import("mongoose").SchemaDefinitionProperty<string, Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tag?: import("mongoose").SchemaDefinitionProperty<string, Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    perks?: import("mongoose").SchemaDefinitionProperty<string[], Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    glow?: import("mongoose").SchemaDefinitionProperty<string, Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    border?: import("mongoose").SchemaDefinitionProperty<string, Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    featured?: import("mongoose").SchemaDefinitionProperty<boolean, Membership, Document<unknown, {}, Membership, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Membership & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Membership>;
