import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import crypto from 'crypto';
import UserRepo from '../../../database/repository/UserRepo';
import { BadRequestError, AuthFailureError } from '../../../core/ApiError';
import KeystoreRepo from '../../../database/repository/KeystoreRepo';
import { createTokens } from '../../../auth/authUtils';
import validator from '../../../helpers/validator';
import schema from './schema';
import asyncHandler from '../../../helpers/asyncHandler';
import bcrypt from 'bcrypt';
import _ from 'lodash';

const router = express.Router();

export default router.post(
  '/basic',
  validator(schema.userCredential),
  asyncHandler(async (req, res) => {
    const foundUser = await UserRepo.findByEmail(req.body.email);
    if (!foundUser) throw new BadRequestError('User not registered');
    if (!foundUser.password) throw new BadRequestError('Credential not set');

    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (!match) throw new AuthFailureError('Authentication failure');

    const accessTokenKey = crypto.randomBytes(64).toString('hex');
    const refreshTokenKey = crypto.randomBytes(64).toString('hex');

    await KeystoreRepo.create(foundUser._id, accessTokenKey, refreshTokenKey);
    const tokens = await createTokens(foundUser, accessTokenKey, refreshTokenKey);

    new SuccessResponse('Login Success', {
      user: _.pick(foundUser, ['_id', 'name', 'profilePicUrl', 'role']),
      tokens: tokens,
    }).send(res);
  }),
);
