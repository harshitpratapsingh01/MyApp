import express from 'express';
import * as dotenv from "dotenv";
import router from './src/routes/get';


dotenv.config();
const app = express();


const port = process.env.PORT;
const sk = process.env.secret_key;

app.use('/', router);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

