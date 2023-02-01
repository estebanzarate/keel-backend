const mainMarket = document.querySelector('.main-market');

const getProducts = async () => {
	const res = await fetch('http://localhost:8080/products');
	console.log(document.cookie);
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
	await fetch(`http://localhost:8080/addProduct/${e.target.dataset.id}`, {
		method: 'POST'
	});
};

const isLoggedIn = async () => {
	const res = await fetch('http://localhost:8080/');
};

document.addEventListener('click', e => {
	if (e.target.matches('.btn-buy')) {
		addProduct(e);
	}
});

getProducts();
