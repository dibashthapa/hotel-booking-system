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
  validator(schema.hotelCreate, ValidationSource.BODY),
  asyncHandler(async (req: ProtectedRequest, res) => {
    const createdHotel = await HotelRepo.create({
      name: req.body.name,
      slug: req.body.slug,
      price: req.body.price,
      description: req.body.description,
      guest: req.body.guest,
      gallery: req.body.gallery,
      contact: req.body.phone,
      image: req.body.image,
      createdBy: req.user,
      updatedBy: req.user,

      facilities: {
        wifi: req.body.wifi,
        parking: req.body.parking,
        pool: req.body.pool,
        ac: req.body.ac,
        extraBed: req.body.extraBed,
      },
    } as Hotel);

    return new SuccessResponse('Hotel Success', {
      hotel: createdHotel,
    }).send(res);
  }),
);

export default router;
