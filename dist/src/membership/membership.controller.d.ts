import { MembershipService } from './membership.service';
import { Membership } from './membership.schema';
export declare class MembershipController {
    private readonly membershipService;
    constructor(membershipService: MembershipService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./membership.schema").MembershipDocument, {}, import("mongoose").DefaultSchemaOptions> & Membership & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    update(tier: string, updateData: Partial<Membership>): Promise<(import("mongoose").Document<unknown, {}, import("./membership.schema").MembershipDocument, {}, import("mongoose").DefaultSchemaOptions> & Membership & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
