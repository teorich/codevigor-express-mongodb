import express from 'express'

import { createBookHandler, deleteBookHandler, getAllBooksHandler, updateBookHandler } from '../controller/book.controller'
import requireUser from '../middleware/requireUser'
import validateResource from '../middleware/validateResource'
import { createBookSchema } from '../schema/book.schema'


const router = express.Router()

router.post("/api/books", [requireUser, validateResource(createBookSchema)], createBookHandler)

router.get("/api/books", requireUser, getAllBooksHandler)

router.patch("/api/books/:id",  updateBookHandler)

router.delete("/api/books/:id",  deleteBookHandler)

export default router