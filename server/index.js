import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Authroutes from './routes/AuthRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', Authroutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
