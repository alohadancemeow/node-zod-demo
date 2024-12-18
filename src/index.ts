import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});