import Joi from '@hapi/joi';
import { JoiObjectId } from '../../../helpers/validator';
export default {
  bookingCreate: Joi.object().keys({
    checkinDate: Joi.date().required(),
    checkoutDate: Joi.date().required(),
    roomId: JoiObjectId().required(),
    location: Joi.string().required(),
    adultCount: Joi.number().required(),
    childrenCount: Joi.number().required(),
  }),
  bookingId: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
