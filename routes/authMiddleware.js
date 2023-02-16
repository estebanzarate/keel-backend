const isAuth = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(401).json({ message: '[!] Not authorized' });
	}
};

const isAdmin = (req, res, next) => {
	if (req.isAuthenticated() && req.user.admin) {
		next();
	} else {
		res.status(401).json({ message: '[!] Not authorized' });
	}
};

export { isAuth, isAdmin };
