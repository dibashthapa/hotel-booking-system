import express from 'express';
import ApiKeyRepo from '../database/repository/ApiKeyRepo';
import { ForbiddenError } from '../core/ApiError';
import Logger from '../core/Logger';
import schema from './schema';
import validator, { ValidationSource } from '../helpers/validator';
import asyncHandler from '../helpers/asyncHandler';
import { PublicRequest } from '../types/app-request';

const router = express.Router();

export default router.use(
  asyncHandler(async (req: PublicRequest, res, next) => {
    // @ts-ignore

    const apiKey = await ApiKeyRepo.findByKey(req.apiKey);
    Logger.info(apiKey);

    return next();
  }),
);
