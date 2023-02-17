import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import strategy from './config/passport.js';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { __dirname } from './utils/utils.js';
import router from './routes/index.js';
import routerViews from './routes/views.js';
const { MONGODB_USER, MONGODB_PASS, SECRET } = process.env;

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.json());
app.use(cors());
app.use(
	session({
		store: MongoStore.create({
			mongoUrl: `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.himwfae.mongodb.net/?retryWrites=true&w=majority`,
			mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true }
		}),
		secret: `${SECRET}`,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 }
	})
);
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
// 	console.log(req.session);
// 	console.log(req.user);
// 	next();
// });

app.use('/', router);
app.use('/', routerViews);

app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/error404.html')));

mongoose.set('strictQuery', false);
mongoose
	.connect(
		`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.himwfae.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('DB connected');
		app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));
	});
