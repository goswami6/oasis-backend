import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: any): Promise<import("./schemas/user.schema").User>;
    findOne(id: string): Promise<import("./schemas/user.schema").UserDocument | null>;
    getWalletBalance(id: string): Promise<{
        success: boolean;
        balance: number;
    }>;
    payWithWallet(id: string, amount: number): Promise<{
        success: boolean;
        newBalance: number | undefined;
        message: string;
    } | {
        success: boolean;
        message: any;
        newBalance?: undefined;
    }>;
}
