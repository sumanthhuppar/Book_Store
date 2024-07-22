import express from 'express';
import { addBook } from '../controller/addBook.controller.js';
import "../index.js"
const router = express.Router();

// Route to add a new book
// router.route("/add").post(addBook);
router.post("/add", addBook);   


export default router;  