import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InquiryDocument = Inquiry & Document;

@Schema({ timestamps: true })
export class Inquiry {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  investment: string;

  @Prop({ required: true })
  businessBackground: string;

  @Prop({
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Closed'],
    default: 'New',
  })
  status: string;
  
  @Prop()
  aadharNumber: string;

  @Prop()
  panNumber: string;

  @Prop({ default: false })
  siteVisitConsent: boolean;

  @Prop()
  aadharFront: string;

  @Prop()
  aadharBack: string;

  @Prop()
  panImage: string;

  @Prop({
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  })
  kycStatus: string;

  @Prop()
  kycFeedback: string;
}

export const InquirySchema = SchemaFactory.createForClass(Inquiry);
