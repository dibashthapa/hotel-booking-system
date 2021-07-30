import express from 'express';
import schema from './schema';
import asyncHandler from '../../../helpers/asyncHandler';
import validator, { ValidationSource } from '../../../helpers/validator';
import { ProtectedRequest } from '../../../types/app-request';
import { BadRequestResponse, SuccessResponse } from '../../../core/ApiResponse';
import authentication from '../../../auth/authentication';
import { RoleCode } from '../../../database/model/Role';
import authorization from '../../../auth/authorization';
import role from '../../../helpers/role';
import BookingRepo from '../../../database/repository/BookingRepo';
import Booking from '../../../database/model/Booking';
import RoomRepo from '../../../database/repository/RoomRepo';
import moment from 'moment';
import Room from '../../../database/model/Room';

const router = express.Router();
router.use('/', authentication, role(RoleCode.USER), authorization);

router.post(
  '/create',
  validator(schema.bookingCreate, ValidationSource.BODY),
  asyncHandler(async (req: ProtectedRequest, res) => {
    const room = await RoomRepo.findInfoById(req.body.roomId);

    const checkinDate = moment(req.body.checkinDate, 'YYYY-MM-DD');
    const checkoutDate = moment(req.body.checkoutDate, 'YYYY-MM-DD');
    const days = moment.duration(checkoutDate.diff(checkinDate)).asDays();
    const totalCharge = Number(room?.price) * days;

    const foundBooking = await BookingRepo.findByRoomAndUser(room as Room, req.user);

    if (foundBooking) throw new BadRequestResponse('You have already booked this room').send(res);
    const createdBooking = await BookingRepo.create({
      room: room,
      checkinDate: checkinDate.toDate(),
      checkoutDate: checkoutDate.toDate(),
      createdBy: req.user,
      location: req.body.location,
      adultCount: req.body.adultCount,
      childrenCount: req.body.childrenCount,
      totalCharge,
    } as Booking);

    return new SuccessResponse('Booking Success', {
      booking: createdBooking,
    }).send(res);
  }),
);

export default router;
