import express from 'express';
import KeystoreRepo from '../../../database/repository/KeystoreRepo';
import { SuccessMsgResponse } from '../../../core/ApiResponse';
import asyncHandler from '../../../helpers/asyncHandler';
import authentication from '../../../auth/authentication';
import { ProtectedRequest } from '../../../types/app-request';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are private APIs protected for Access Token
router.use('/', authentication);
/*-------------------------------------------------------------------------*/

router.delete(
  '/',
  asyncHandler(async (req: ProtectedRequest, res) => {
    await KeystoreRepo.remove(req.keystore._id);
    new SuccessMsgResponse('Logout success').send(res);
  }),
);

export default router;