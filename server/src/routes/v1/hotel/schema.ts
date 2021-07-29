import Joi from '@hapi/joi';
import { JoiObjectId } from '../../../helpers/validator';
export default {
  hotelCreate: Joi.object().keys({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    price: Joi.string().required(),
    guest: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    gallery: Joi.array().required(),
    phone: Joi.number().required(),
    wifi: Joi.boolean().optional(),
    parking: Joi.boolean().optional(),
    pool: Joi.boolean().optional(),
    ac: Joi.boolean().optional(),
    extraBed: Joi.boolean().optional(),
  }),
  hotelId: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
