import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import { BadRequestError, NoDataError } from '../../../core/ApiError';
import asyncHandler from '../../../helpers/asyncHandler';
import RoomRepo from '../../../database/repository/RoomRepo';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import { Types } from 'mongoose';
const router = express.Router();
router.get(
  '',
  asyncHandler(async (req, res) => {
    const rooms = await RoomRepo.findRooms();
    if (!rooms || rooms.length < 1) throw new NoDataError();
    return new SuccessResponse('success', rooms).send(res);
  }),
);

router.get(
  '/id/:id',
  validator(schema.roomId, ValidationSource.PARAM),
  asyncHandler(async (req, res) => {
    const room = await RoomRepo.findInfoById(new Types.ObjectId(req.params.id));
    if (!room) throw new BadRequestError('Room do not exists');
    return new SuccessResponse('success', room).send(res);
  }),
);

export default router;
