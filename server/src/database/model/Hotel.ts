import { model, Schema, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Hotel';
export const COLLECTION_NAME = 'hotels';

interface Location {
  lat: string;
  lon: string;
  name: string;
}

export default interface Hotel extends Document {
  name: string;
  location: Location;
  phone: string;
}

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    location: {
      lat: {
        type: Schema.Types.String,
        required: true,
      },
      lon: {
        type: Schema.Types.String,
        required: true,
      },
      name: {
        type: Schema.Types.String,
        required: true,
      },
    },
    phone: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { versionKey: false },
);

export const HotelModel = model<Hotel>(DOCUMENT_NAME, schema, COLLECTION_NAME);
