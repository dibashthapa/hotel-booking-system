import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import { BadRequestError, NoDataError } from '../../../core/ApiError';
import asyncHandler from '../../../helpers/asyncHandler';
import BookingRepo from '../../../database/repository/BookingRepo';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import { Types } from 'mongoose';
import authentication from '../../../auth/authentication';
import role from '../../../helpers/role';
import { RoleCode } from '../../../database/model/Role';
import authorization from '../../../auth/authorization';
import { ProtectedRequest } from '../../../types/app-request';
const router = express.Router();
router.use('/', authentication, role(RoleCode.USER), authorization);
router.get(
  '',
  asyncHandler(async (req: ProtectedRequest, res) => {
    const bookings = await BookingRepo.findBookings(req.user);
    if (!bookings || bookings.length < 1) throw new NoDataError();
    return new SuccessResponse('success', bookings).send(res);
  }),
);

router.get(
  '/id/:id',
  validator(schema.bookingId, ValidationSource.PARAM),
  asyncHandler(async (req, res) => {
    const booking = await BookingRepo.findInfoById(new Types.ObjectId(req.params.id));
    if (!booking) throw new BadRequestError('Booking do not exists');
    return new SuccessResponse('success', booking).send(res);
  }),
);

export default router;
