const formNewUser = document.getElementById('new-user');
formNewUser.addEventListener('submit', e => createUser(e));

const createUser = async e => {
	e.preventDefault();
	const dataNewUser = new FormData(e.target);

	const data = {
		email: dataNewUser.get('userEmail'),
		password: dataNewUser.get('userPassword')
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
