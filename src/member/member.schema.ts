import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Member extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  userEmail: string;

  @Prop({ required: true })
  tier: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'Pending' })
  status: string; // Pending, Active, Expired

  @Prop()
  paymentId: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
