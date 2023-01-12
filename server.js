import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { __dirname } from './utils/utils.js';
import router from './routes/routes.js';
const { MONGODB_USER, MONGODB_PASS } = process.env;

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

app.use('/', router);

app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/error404.html')));

await mongoose
	.connect(
		`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.himwfae.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('Connection fulfilled'));

app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));
