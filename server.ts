import express from 'express';
import { user_details } from './src/routes/get';
import * as dotenv from "dotenv";
dotenv.config();
const router = express.Router();


const port = process.env.PORT;
const sk = process.env.secret_key;

router.get('/', (req, res) => {
    user_details(req,res);
});


// router.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

export default router;