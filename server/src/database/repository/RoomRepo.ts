import Room, { RoomModel } from '../model/Room';
import { Types } from 'mongoose';
import Logger from '../../core/Logger';

export default class RoomRepo {
  public static async create(room: Room): Promise<Room> {
    const now = new Date();
    room.createdAt = now;
    room.updatedAt = now;
    const createdRoom = await RoomModel.create(room);
    Logger.debug(createdRoom);
    return createdRoom.toObject();
  }

  public static update(room: Room, isAvailable: boolean) {
    room.updatedAt = new Date();
    return RoomModel.updateOne(
      { _id: room._id },
      {
        $set: { isAvailable },
      },
    )
      .lean<Room>()
      .exec();
  }

  public static findInfoById(id: Types.ObjectId): Promise<Room | null> {
    return RoomModel.findOne({ _id: id }).lean<Room>().exec();
  }

  public static findRooms(): Promise<Room[]> {
    return RoomModel.find({}).populate('hotel').lean<Room>().exec();
  }
}
