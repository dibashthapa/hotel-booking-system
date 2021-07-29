import Hotel, { HotelModel } from '../model/Hotel';

import { Types } from 'mongoose';
import Logger from '../../core/Logger';

export default class HotelRepo {
  public static async create(hotel: Hotel): Promise<Hotel> {
    //const now = new Date();
    //hotel.createdAt = now;
    //hotel.updatedAt = now;
    const createdHotel = await HotelModel.create(hotel);
    Logger.debug(createdHotel);
    return createdHotel.toObject();
  }

  public static update(hotel: Hotel) {
    //hotel.updatedAt = new Date();
    return HotelModel.updateOne(
      { _id: hotel._id },
      {
        $set: { ...hotel },
      },
    )
      .lean<Hotel>()
      .exec();
  }

  public static findInfoById(id: Types.ObjectId): Promise<Hotel | null> {
    return HotelModel.findOne({ _id: id }).lean<Hotel>().exec();
  }

  public static findHotels(): Promise<Hotel[]> {
    return HotelModel.find({}).lean<Hotel>().exec();
  }
}
