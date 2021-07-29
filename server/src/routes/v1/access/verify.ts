import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import UserRepo from '../../../database/repository/UserRepo';
import { AuthFailureError } from '../../../core/ApiError';
import { getAccessToken, validateTokenData } from '../../../auth/authUtils';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import asyncHandler from '../../../helpers/asyncHandler';
import _ from 'lodash';
import { ProtectedRequest } from '../../../types/app-request';
import { Types } from 'mongoose';
import JWT from '../../../core/JWT';

const router = express.Router();

export default router.post(
  '/basic',
  validator(schema.auth, ValidationSource.HEADER),
  asyncHandler(async (req: ProtectedRequest, res) => {
    req.accessToken = getAccessToken(req.headers.authorization);

    const accessTokenPayload = await JWT.decode(req.accessToken);
    validateTokenData(accessTokenPayload);

    const user = await UserRepo.findById(new Types.ObjectId(accessTokenPayload.sub));

    if (!user) throw new AuthFailureError('User not registered');
    new SuccessResponse('Token Verified', {
      user: _.pick(user, ['_id', 'name', 'profilePicUrl', 'roles']),
    }).send(res);
  }),
);
