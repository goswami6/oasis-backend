import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { Membership, MembershipDocument } from './membership.schema';
export declare class MembershipService implements OnModuleInit {
    private membershipModel;
    constructor(membershipModel: Model<MembershipDocument>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, MembershipDocument, {}, import("mongoose").DefaultSchemaOptions> & Membership & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    update(tier: string, updateData: Partial<Membership>): Promise<(import("mongoose").Document<unknown, {}, MembershipDocument, {}, import("mongoose").DefaultSchemaOptions> & Membership & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
