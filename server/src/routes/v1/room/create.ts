import express from 'express';
import schema from './schema';
import asyncHandler from '../../../helpers/asyncHandler';
import validator, { ValidationSource } from '../../../helpers/validator';
import { ProtectedRequest } from '../../../types/app-request';
import { SuccessResponse } from '../../../core/ApiResponse';
import authentication from '../../../auth/authentication';
import { RoleCode } from '../../../database/model/Role';
import authorization from '../../../auth/authorization';
import role from '../../../helpers/role';
import RoomRepo from '../../../database/repository/RoomRepo';
import Room from '../../../database/model/Room';
import HotelRepo from '../../../database/repository/HotelRepo';

const router = express.Router();
router.use('/', authentication, role(RoleCode.AGENT), authorization);

router.post(
  '/create',
  validator(schema.roomCreate, ValidationSource.BODY),
  asyncHandler(async (req: ProtectedRequest, res) => {
    const hotel = await HotelRepo.findInfoById(req.body.hotelId);
    const createdRoom = await RoomRepo.create({
      hotel: hotel,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      gallery: req.body.gallery,
      createdBy: req.user,
      updatedBy: req.user,
      facilities: {
        ac: req.body.ac,
        pool: req.body.pool,
        wifi: req.body.wifi,
        parking: req.body.parking,
      },
      isAvailable: req.body.isAvailable,
    } as Room);

    return new SuccessResponse('Room Success', {
      room: createdRoom,
    }).send(res);
  }),
);

export default router;
