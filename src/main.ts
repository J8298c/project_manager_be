import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

if(!process.env.PORT || !process.env.DB_URI) {
  console.error('Please set PORT and DB_URI in the .env file!');
  process.exit(1);
}

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('Server started on port 3333!');
})