import express from 'express';
import schema from './schema';
import asyncHandler from '../../../helpers/asyncHandler';
import validator, { ValidationSource } from '../../../helpers/validator';
import { ProtectedRequest } from '../../../types/app-request';
import HotelRepo from '../../../database/repository/HotelRepo';
import { SuccessResponse } from '../../../core/ApiResponse';
import Hotel from '../../../database/model/Hotel';
import authentication from '../../../auth/authentication';
import { RoleCode } from '../../../database/model/Role';
import authorization from '../../../auth/authorization';
import role from '../../../helpers/role';

const router = express.Router();
router.use('/', authentication, role(RoleCode.AGENT), authorization);

router.post(
  '/create',
  validator(schema.createHotel, ValidationSource.BODY),
  asyncHandler(async (req: ProtectedRequest, res) => {
    const createdHotel = await HotelRepo.create({
      name: req.body.name,
      location: {
        name: req.body.address,
        lat: req.body.lat,
        lon: req.body.lon,
      },
      phone: req.body.phone,
    } as Hotel);

    return new SuccessResponse('Hotel Success', {
      hotel: createdHotel,
    }).send(res);
  }),
);

export default router;
