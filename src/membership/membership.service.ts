import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Membership, MembershipDocument } from './membership.schema';

@Injectable()
export class MembershipService implements OnModuleInit {
  constructor(
    @InjectModel(Membership.name) private membershipModel: Model<MembershipDocument>,
  ) {}

  async onModuleInit() {
    const count = await this.membershipModel.countDocuments();
    if (count === 0) {
      await this.membershipModel.create([
        {
          tier: 'Silver',
          tag: 'Essential Status',
          amount: 5000,
          perks: ['Basic discounts', 'Café credits', 'Standard access'],
          glow: 'hover:shadow-[0_0_40px_rgba(148,163,184,0.15)]',
          border: 'border-slate-400/20',
          featured: false,
        },
        {
          tier: 'Gold',
          tag: 'Priority Status',
          amount: 15000,
          perks: ['Extra benefits', 'Priority booking', 'Meeting room credits'],
          glow: 'hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]',
          border: 'border-accent-gold/30',
          featured: true,
        },
        {
          tier: 'Platinum',
          tag: 'Elite status',
          amount: 50000,
          perks: ['Premium rewards', 'Franchise priority', 'Equity benefits'],
          glow: 'hover:shadow-[0_0_40px_rgba(123,227,214,0.15)]',
          border: 'border-primary-mist/30',
          featured: false,
        },
      ]);
    }
  }

  async findAll() {
    return this.membershipModel.find().exec();
  }

  async update(tier: string, updateData: Partial<Membership>) {
    return this.membershipModel.findOneAndUpdate({ tier }, updateData, { new: true }).exec();
  }
}
