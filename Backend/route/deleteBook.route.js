import express from 'express';
import { deleteBook } from '../controller/deleteBook.controller.js';

const router = express.Router();

router.delete("/:id", deleteBook);

export default router;