import { Schema, model, Document } from 'mongoose';
import User from './User';
export const DOCUMENT_NAME = 'Review';
export const COLLECTION_NAME = 'reviews';

export default interface Review extends Document {
  createdBy: User;
  stars: string;
  title: string;
  description: string;
  createdAt?: Date;
}

const schema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    stars: {
      type: Schema.Types.String,
      required: true,
    },
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false },
);

export const ReviewModel = model<Review>(DOCUMENT_NAME, schema, COLLECTION_NAME);
