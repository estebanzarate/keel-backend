import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../models/userModel.js';
import { isValidPassword } from '../utils/utils.js';

export default new Strategy({ usernameField: 'email' }, (username, password, done) => {
	User.findOne({ email: username })
		.then(user => {
			if (!user) return done('User not found', false);
			const isValid = isValidPassword(user, password);
			if (isValid) done(null, user);
			else done('Wrong password', false);
		})
		.catch(error => done(error));
});

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((userId, done) => {
	User.findById(userId)
		.then(user => done(null, user))
		.catch(error => done(error));
});
