import { model, Schema, Document } from 'mongoose';
import User from './User';

export const DOCUMENT_NAME = 'Hotel';
export const COLLECTION_NAME = 'hotels';

interface Facilities {
  wifi: boolean;
  parking: boolean;
  pool: boolean;
  ac: boolean;
  extraBed: boolean;
}

export default interface Hotel extends Document {
  name: string;
  price: string;
  slug: string;
  description: string;
  guest: number;
  image: string;
  gallery: string[];
  contact: string;
  facilities?: Facilities;
  createdBy?: User;
  updatedBy?: User;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
    },
    slug: {
      type: Schema.Types.String,
      required: true,
    },
    price: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    guest: {
      type: Schema.Types.Number,
      required: true,
    },
    image: Schema.Types.String,
    gallery: {
      type: Schema.Types.Array,
      maxlength: 4,
      required: true,
    },
    contact: {
      type: Schema.Types.String,
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
      extraBed: {
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

export const HotelModel = model<Hotel>(DOCUMENT_NAME, schema, COLLECTION_NAME);
