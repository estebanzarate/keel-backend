const mainMarket = document.querySelector('.main-market');
const btnBuy = document.querySelectorAll('.btn-buy');
const btnsContainer = document.querySelector('.btns-container');
const btnLogout = `<a href="/logout">logout</a>`;

const getProducts = async () => {
	const res = await fetch('http://localhost:8080/products');
	const TOYS = await res.json();
	for (const toy of TOYS) {
		mainMarket.innerHTML += `
                            <div class="toy">
                                <div class="toy-img">
                                    <img src=${toy.img}>
                                    <div class="toy-price">
                                        <p>USD${toy.price}</p>
                                    </div>
                                </div>
                                <div class="toy-name">
                                    <p>${toy.name}</p>
                                </div>
                                <div class="toy-btn">
                                    <input type="button" value="buy" data-id="${toy._id}" class="btn-buy">
                                </div>
                            </div>
                            `;
	}
};

const addProduct = async e => {
	if (e.target.matches('.btn-buy')) {
		await fetch(`http://localhost:8080/addProduct/${e.target.dataset.id}`, {
			method: 'POST'
		});
	}
};

const getCart = async () => {
	const res = await fetch('http://localhost:8080/cart');
	if (res.ok) {
		document.querySelectorAll('.btn-market').forEach(btn => btn.classList.add('hide'));
		btnsContainer.insertAdjacentHTML('afterbegin', btnLogout);
		const { cart } = await res.json();
	}
};

const logout = async e => {
	if (e.target.matches('.btn-logout')) {
		const res = await fetch('http://localhost:8080/logout');
		console.log(res);
		// if (res.ok) location.href = 'black-market';
	}
};

document.addEventListener('click', e => {
	addProduct(e);
	logout(e);
});

getProducts();
getCart();
