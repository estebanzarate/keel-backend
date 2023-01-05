const TOYS = [
	{
		id: 1,
		name: 'halloween',
		img: '../assets/images/buy/item-one.jpg',
		price: 200
	},
	{
		id: 2,
		name: 'jason',
		img: '../assets/images/buy/item-two.jpg',
		price: 200
	},
	{
		id: 3,
		name: 'scream',
		img: '../assets/images/buy/item-three.jpg',
		price: 200
	},
	{
		id: 4,
		name: 'chucky',
		img: '../assets/images/buy/item-four.jpg',
		price: 200
	},
	{
		id: 5,
		name: 'freddy',
		img: '../assets/images/buy/item-five.jpg',
		price: 200
	},
	{
		id: 6,
		name: 'saw',
		img: '../assets/images/buy/item-six.jpg',
		price: 200
	}
];

const mainMarket = document.querySelector('.main-market');

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
                                    <input type="button" value="buy">
                                </div>
                            </div>
                            `;
}
