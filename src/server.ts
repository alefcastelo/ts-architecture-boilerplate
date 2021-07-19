import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();

app.use(routes);

app.listen(process.env.HOST_PORT, () => {
  console.log(`Server running: http://localhost:${process.env.HOST_PORT}`);
});
