import express from 'express';
import { AuthFailureError } from '../core/ApiError';
import asyncHandler from '../helpers/asyncHandler';
import { ProtectedRequest } from '../types/app-request';

const router = express.Router();

export default router.use(
  asyncHandler(async (req: ProtectedRequest, res, next) => {
    if (!req.user || !req.currentRoleCode) throw new AuthFailureError('Permission denied');
    if (req.currentRoleCode != req.user.role) throw new AuthFailureError('Permission denied');

    return next();
  }),
);
