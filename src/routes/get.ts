import express from 'express';
import path from 'path';
import { details} from "../models/schema";
const router = express.Router();


router.get('/:id', (req, res) => {
    try{
        const id = Number(req.params.id);
        const user = details.find((find_id) => find_id.id === id);
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(500).json({statusCode: '500', status :"User Not Found"});
        }
        // res.json(details);
        // console.log(req);
    }
    catch{
        res.status(500).send("Server error");
    }
});


export default router;