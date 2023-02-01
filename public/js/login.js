const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => loginUser(e));

const loginUser = async e => {
	e.preventDefault();
	const dataLoginUser = new FormData(e.target);

	const data = {
		email: dataLoginUser.get('email'),
		password: dataLoginUser.get('password')
	};

	const res = await fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	if (res.ok) location.href = 'black-market';
};
