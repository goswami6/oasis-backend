import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'user' })
  role: string;

  @Prop()
  name: string;

  @Prop({ default: 1000 })
  walletBalance: number;

  @Prop()
  membershipTier: string;

  @Prop()
  membershipExpiry: Date;

  @Prop({ default: false })
  isMembershipActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
