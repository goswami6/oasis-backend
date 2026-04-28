import { MemberService } from './member.service';
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    apply(data: any): Promise<import("mongoose").Document<unknown, {}, import("./member.schema").Member, {}, import("mongoose").DefaultSchemaOptions> & import("./member.schema").Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./member.schema").Member, {}, import("mongoose").DefaultSchemaOptions> & import("./member.schema").Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateStatus(id: string, status: string): Promise<(import("mongoose").Document<unknown, {}, import("./member.schema").Member, {}, import("mongoose").DefaultSchemaOptions> & import("./member.schema").Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
