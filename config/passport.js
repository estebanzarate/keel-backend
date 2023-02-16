import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../models/userModel.js';
import { isValidPassword } from '../utils/utils.js';

export default new Strategy(
	{
		usernameField: 'email',
		passwordField: 'password'
	},
	(username, password, done) => {
		User.findOne({ email: username })
			.then(user => {
				if (!user) return done(null, false);
				const isValid = isValidPassword(user, password);
				if (isValid) return done(null, user);
				else return done(null, false);
			})
			.catch(error => done(error));
	}
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((userId, done) => {
	User.findById(userId)
		.then(user => {
			done(null, user);
		})
		.catch(error => done(error));
});
