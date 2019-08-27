import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import locationsRoute from './routes/locations';

const app = express();
const port = 3000

mongoose.connect('mongodb://localhost/SMS_DB', { useNewUrlParser: true });

app.use(cors());
app.use(morgan('dev'));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/locations', locationsRoute);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Population app listening on port ${port}!`));

export default app;