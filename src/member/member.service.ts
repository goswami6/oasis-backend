import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from './member.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<Member>,
    private readonly userService: UserService
  ) {}

  async apply(data: any) {
    const newMember = new this.memberModel(data);
    return newMember.save();
  }

  async findAll() {
    return this.memberModel.find().sort({ createdAt: -1 }).exec();
  }

  async updateStatus(id: string, status: string) {
    const member = await this.memberModel.findByIdAndUpdate(id, { status }, { new: true });
    
    // Wallet Token Calculation: 5% of Membership Amount
    if (member && status === 'Active' && member.userId) {
      const tokenAmount = Math.floor(member.amount * 0.05);
      await this.userService.addWalletBalance(member.userId.toString(), tokenAmount);
    }
    
    return member;
  }
}
