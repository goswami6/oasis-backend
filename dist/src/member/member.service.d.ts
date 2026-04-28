import { Model } from 'mongoose';
import { Member } from './member.schema';
import { UserService } from '../user/user.service';
export declare class MemberService {
    private memberModel;
    private readonly userService;
    constructor(memberModel: Model<Member>, userService: UserService);
    apply(data: any): Promise<import("mongoose").Document<unknown, {}, Member, {}, import("mongoose").DefaultSchemaOptions> & Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Member, {}, import("mongoose").DefaultSchemaOptions> & Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateStatus(id: string, status: string): Promise<(import("mongoose").Document<unknown, {}, Member, {}, import("mongoose").DefaultSchemaOptions> & Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
