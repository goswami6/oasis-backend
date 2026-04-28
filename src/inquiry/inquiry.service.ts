import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inquiry, InquiryDocument } from './schemas/inquiry.schema';

@Injectable()
export class InquiryService {
  constructor(
    @InjectModel(Inquiry.name) private inquiryModel: Model<InquiryDocument>,
  ) {}

  async create(createInquiryDto: any): Promise<Inquiry> {
    const createdInquiry = new this.inquiryModel(createInquiryDto);
    return createdInquiry.save();
  }

  async findAll(): Promise<Inquiry[]> {
    return this.inquiryModel.find().sort({ createdAt: -1 }).exec();
  }

  async updateStatus(id: string, status: string): Promise<Inquiry | null> {
    return this.inquiryModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();
  }

  async updateKycStatus(id: string, kycStatus: string, kycFeedback?: string): Promise<Inquiry | null> {
    return this.inquiryModel
      .findByIdAndUpdate(id, { kycStatus, kycFeedback }, { new: true })
      .exec();
  }

  async findOne(id: string): Promise<Inquiry | null> {
    return this.inquiryModel.findById(id).exec();
  }

  async remove(id: string): Promise<any> {
    return this.inquiryModel.findByIdAndDelete(id).exec();
  }
}
