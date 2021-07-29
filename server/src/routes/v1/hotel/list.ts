import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import { BadRequestError, NoDataError } from '../../../core/ApiError';
import asyncHandler from '../../../helpers/asyncHandler';
import HotelRepo from '../../../database/repository/HotelRepo';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import { Types } from 'mongoose';
const router = express.Router();
router.get(
  '',
  asyncHandler(async (req, res) => {
    const hotels = await HotelRepo.findHotels();
    if (!hotels || hotels.length < 1) throw new NoDataError();
    return new SuccessResponse('success', hotels).send(res);
  }),
);

router.get(
  '/id/:id',
  validator(schema.hotelId, ValidationSource.PARAM),
  asyncHandler(async (req, res) => {
    const hotel = await HotelRepo.findInfoById(new Types.ObjectId(req.params.id));
    if (!hotel) throw new BadRequestError('Hotel do not exists');
    return new SuccessResponse('success', hotel).send(res);
  }),
);

export default router;
