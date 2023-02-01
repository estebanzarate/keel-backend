const formNewUser = document.getElementById('new-user');
formNewUser.addEventListener('submit', e => registerUser(e));

const registerUser = async e => {
	e.preventDefault();
	const newUser = new FormData(e.target);

	const data = {
		email: newUser.get('email'),
		password: newUser.get('password')
	};

	const res = await fetch('http://localhost:8080/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	if (res.ok) location.href = 'black-market';
};
