import express from 'express';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { __dirname } from './utils/utils.js';
import router from './routes/routes.js';
const { MONGODB_USER, MONGODB_PASS } = process.env;

const app = express();
const PORT = process.env || 8080;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(cookieParser('k33lb4ck3nd'));
app.use(
	session({
		store: MongoStore.create({
			mongoUrl: `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.himwfae.mongodb.net/?retryWrites=true&w=majority`,
			mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
			ttl: 15
		}),
		secret: 'k33lb4ck3nd',
		resave: false,
		saveUninitialized: false
	})
);

app.use('/', router);

app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/error404.html')));

mongoose
	.connect(
		`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.himwfae.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('DB connected');
		app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));
	});
