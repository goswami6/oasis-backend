import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: any): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOne(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async addWalletBalance(id: string, amount: number): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(id, { $inc: { walletBalance: amount } }, { new: true }).exec();
  }

  async deductWalletBalance(id: string, amount: number): Promise<UserDocument | null> {
    const user = await this.userModel.findById(id);
    if (!user) throw new Error("User not found");
    if (user.walletBalance < amount) throw new Error("Insufficient wallet balance");
    
    user.walletBalance -= amount;
    return user.save();
  }
}
