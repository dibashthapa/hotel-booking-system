import Booking, { BookingModel } from '../model/Booking';
import { Types } from 'mongoose';
import RoomRepo from './RoomRepo';
import User from '../model/User';
import Room from '../model/Room';

export default class BookingRepo {
  public static async create(booking: Booking): Promise<Booking> {
    const createdBooking = await BookingModel.create(booking);
    await RoomRepo.update(createdBooking.room, false);
    return createdBooking.toObject();
  }

  public static update(booking: Booking) {
    return BookingModel.updateOne(
      { _id: booking._id },
      {
        $set: { ...booking },
      },
    )
      .lean<Booking>()
      .exec();
  }

  public static findInfoById(id: Types.ObjectId): Promise<Booking | null> {
    return BookingModel.findOne({ _id: id }).lean<Booking>().exec();
  }

  public static findByRoomAndUser(room: Room, user: User): Promise<Booking | null> {
    return BookingModel.findOne({ room: room, createdBy: user }).lean<Booking>().exec();
  }

  public static findBookings(user: User): Promise<Booking[]> {
    return BookingModel.find({ createdBy: user }).populate('room').lean<Booking>().exec();
  }
}
