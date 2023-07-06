import { details} from "../models/schema";

const user_details = (req,res) => {
    res.status(200).json({statusCode : '200', status : 'Success', details});
}

export {user_details};