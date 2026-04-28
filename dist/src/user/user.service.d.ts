import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: any): Promise<User>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findOne(id: string): Promise<UserDocument | null>;
    addWalletBalance(id: string, amount: number): Promise<UserDocument | null>;
    deductWalletBalance(id: string, amount: number): Promise<UserDocument | null>;
}
