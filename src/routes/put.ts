import express from 'express';
import { details } from '../models/schema';
import { updateUserData } from '../controller/updateData';
const router = express.Router();

router.put('/:id', (req,res) => {
    const id = Number(req.params.id);
    const update_data = req.body;
    updateUserData(update_data,id,req,res);
})

export {router as putRouter};