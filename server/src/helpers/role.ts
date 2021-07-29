import { RoleCode } from '../database/model/Role';
import { Response, NextFunction } from 'express';
import { RoleRequest } from '../types/app-request';

export default (roleCode: RoleCode) => (req: RoleRequest, res: Response, next: NextFunction) => {
  req.currentRoleCode = roleCode;
  next();
};
