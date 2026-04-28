import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MembershipDocument = Membership & Document;

@Schema({ timestamps: true })
export class Membership {
  @Prop({ required: true, unique: true })
  tier: string;

  @Prop()
  tag: string;

  @Prop({ required: true })
  amount: number;

  @Prop([String])
  perks: string[];

  @Prop()
  glow: string;

  @Prop()
  border: string;

  @Prop({ default: false })
  featured: boolean;
}

export const MembershipSchema = SchemaFactory.createForClass(Membership);
