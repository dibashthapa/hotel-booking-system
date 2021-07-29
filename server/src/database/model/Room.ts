import { Schema, model, Document } from 'mongoose';
import Hotel from './Hotel';
import User from './User';
export const DOCUMENT_NAME = 'Room';
export const COLLECTION_NAME = 'rooms';

interface Facilities {
  wifi: boolean;
  parking: boolean;
  pool: boolean;
  ac: boolean;
}
export default interface Room extends Document {
  hotel: Hotel;
  name: string;
  price: string;
  description: string;
  image: string;
  gallery: string[];
  createdBy?: User;
  updatedBy?: User;
  createdAt?: Date;
  updatedAt?: Date;
  facilities?: Facilities;
  isAvailable: boolean;
  bedCount: number;
}

const schema = new Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true,
    },
    isAvailable: {
      type: Schema.Types.Boolean,
      required: true,
    },
    bedCount: {
      type: Schema.Types.Number,
      required: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
    },
    price: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    image: Schema.Types.String,
    gallery: {
      type: Schema.Types.Array,
      maxlength: 4,
      required: true,
    },
    facilities: {
      wifi: {
        type: Schema.Types.Boolean,
      },
      parking: {
        type: Schema.Types.Boolean,
      },
      pool: {
        type: Schema.Types.Boolean,
      },
      ac: {
        type: Schema.Types.Boolean,
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      select: false,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      select: false,
    },
    createdAt: {
      type: Date,
      required: true,
      select: false,
    },
    updatedAt: {
      type: Date,
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);
export const RoomModel = model<Room>(DOCUMENT_NAME, schema, COLLECTION_NAME);
