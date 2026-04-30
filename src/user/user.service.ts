import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { MembershipService } from '../membership/membership.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private membershipService: MembershipService,
  ) {}

  async create(createUserDto: any): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
      walletBalance: 1000, // Fresh user bonus
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

    // Check membership status
    const now = new Date();
    if (!user.isMembershipActive || (user.membershipExpiry && user.membershipExpiry < now)) {
      throw new Error("Membership inactive or expired. Tokens are currently disabled.");
    }

    if (user.walletBalance < amount) throw new Error("Insufficient wallet balance");
    
    user.walletBalance -= amount;
    return user.save();
  }

  async purchaseMembership(userId: string, tier: string): Promise<UserDocument | null> {
    const user = await this.userModel.findById(userId);
    if (!user) throw new Error("User not found");

    const membership = await this.membershipService.findByTier(tier);
    if (!membership) throw new Error("Membership tier not found");

    const bonusTokens = membership.amount + (membership.amount * 0.05);
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 6);

    user.walletBalance += bonusTokens;
    user.membershipTier = tier;
    user.membershipExpiry = expiry;
    user.isMembershipActive = true;

    return user.save();
  }
}
