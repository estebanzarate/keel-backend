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
		const res = await fetch(`http://localhost:8080/addProduct`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ prodId: e.target.dataset.id })
		});
		if (!res.ok) {
			// Modal
		}
	}
};

const getCart = async () => {
	const res = await fetch('http://localhost:8080/cart');
	if (res.ok) {
		document.querySelectorAll('.btn-market').forEach(btn => btn.classList.add('hide'));
		btnsContainer.insertAdjacentHTML('afterbegin', btnLogout);
		const { cart } = await res.json();
		console.log({ cart });
	}
};

const logout = async e =>
	e.target.matches('.btn-logout') && (await fetch('http://localhost:8080/logout'));

document.addEventListener('click', e => {
	addProduct(e);
	logout(e);
});

getProducts();
getCart();
