import express from 'express';
import signup from './access/signup';
import login from './access/login';
import logout from './access/logout';
import token from './access/token';
import blogList from './blog/blogList';
import blogDetail from './blog/blogDetail';
import writer from './blog/writer';
import editor from './blog/editor';
import user from './profile/user';
import hotel from './hotel/create';
import verify from './access/verify';
import hotelList from './hotel/list';

const router = express.Router();
router.use('/signup', signup);
router.use('/login', login);
router.use('/logout', logout);
router.use('/token', token);
router.use('/blogs', blogList);
router.use('/blog', blogDetail);
router.use('/writer/blog', writer);
router.use('/editor/blog', editor);
router.use('/profile', user);
router.use('/hotel', hotel);
router.use('/hotels', hotelList);
router.use('/verify', verify);

export default router;
