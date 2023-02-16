import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
	cart: [],
	admin: { type: Boolean, default: 'false' }
});

const User = mongoose.model('User', userSchema);

export default User;
