import { products } from '../data/products.js';

renderProducts('all');

/*----- CALLING THE FUNCTION THAT GENERATE PRODUCTS AFTER CLICKING -----*/
document.querySelector('.js-all-button').addEventListener('click', () => {
  renderProducts('all');
});

document.querySelector('.js-tees-button').addEventListener('click', () => {
  renderProducts('tees');
});

document.querySelector('.js-bottoms-button').addEventListener('click', () => {
  renderProducts('bottoms');
});

document.querySelector('.js-outerwear-button').addEventListener('click', () => {
  renderProducts('outerwear');
});

document.querySelector('.js-headwear-button').addEventListener('click', () => {
  renderProducts('headwear');
});

/*----- FUNCTION THAT GENERATE PRODUCTS -----*/
function renderProducts(categoryParam) {
  let productsHTML = '';
  let totalProductsHTML = 0;

  products.forEach((product) => {
    if (categoryParam === product.category || categoryParam === 'all') {
      productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img src="assets/images/products/${product.image}" class="product-image">
          </div>
          <div class="product-name">
            ${product.name}
          </div>
          <div class="product-price">
            ${product.price}
          </div>
        </div>
      `;

      totalProductsHTML += 1;
    }
  });

  document.querySelector('.js-product-section-grid').innerHTML = productsHTML;
  document.querySelector('.js-total-products').innerHTML = `${totalProductsHTML} items`;
}