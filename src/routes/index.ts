import express from 'express';
import auth from './auth.routes';
import book from './book.routes';
import user from './user.routes';

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200))

router.use(user)
router.use(auth)
router.use(book)

export default router;