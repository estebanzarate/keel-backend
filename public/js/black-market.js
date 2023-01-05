import TOYS from '../assets/data/toys.json' assert { type: 'json' };

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
