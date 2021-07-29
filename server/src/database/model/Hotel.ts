import { model, Schema, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Hotel';
export const COLLECTION_NAME = 'hotels';

export default interface Hotel extends Document {
  name: string;
  location: string;
  phone: string;
}

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    location: {
      type: Schema.Types.String,
      required: true,
    },
    phone: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { versionKey: false },
);

export const HotelModel = model<Hotel>(DOCUMENT_NAME, schema, COLLECTION_NAME);
