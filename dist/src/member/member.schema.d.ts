import { Document, Types } from 'mongoose';
export declare class Member extends Document {
    userId: Types.ObjectId;
    userName: string;
    userEmail: string;
    tier: string;
    amount: number;
    status: string;
    paymentId: string;
}
export declare const MemberSchema: import("mongoose").Schema<Member, import("mongoose").Model<Member, any, any, any, any, any, Member>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Member, Document<unknown, {}, Member, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tier?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userName?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userEmail?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paymentId?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Member>;
