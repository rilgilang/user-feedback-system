// src/feedback/schemas/feedback-attachment.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FeedbackAttachment extends Document {
  @Prop({ required: true })
  feedback_id: string;

  @Prop({ type: [String], required: true })
  attachment_link: string[];

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const FeedbackAttachmentSchema =
  SchemaFactory.createForClass(FeedbackAttachment);
