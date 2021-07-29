import Joi from '@hapi/joi';
import { JoiObjectId } from '../../../helpers/validator';
export default {
  roomCreate: Joi.object().keys({
    hotelId: JoiObjectId().required(),
    name: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    gallery: Joi.array().required(),
    wifi: Joi.boolean().optional(),
    parking: Joi.boolean().optional(),
    pool: Joi.boolean().optional(),
    ac: Joi.boolean().optional(),
    bedCount: Joi.number().required(),
    isAvailable: Joi.boolean().required(),
  }),
  roomId: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
