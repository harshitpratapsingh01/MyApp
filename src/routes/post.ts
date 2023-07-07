import express from 'express';
import path from 'path';
import { details } from "../models/schema";
import { newUser } from '../controller/addNewUser';
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body, 'body');
    const new_data = req.body;
    newUser(new_data, req, res);
});


export { router as postRouter };