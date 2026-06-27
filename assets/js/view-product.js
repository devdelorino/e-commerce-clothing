import { products } from "../data/products.js";

renderProduct();

/*----- RENDER PRODUCT IN HTML -----*/
function renderProduct() {
  const selectedProductId = localStorage.getItem('selectedProductId');
  let productHTML = '';
  let productSizeHTML = '';

  /*----- LOOPING THROUGH PRODUCTS -----*/
  products.forEach((product) => {

    /*----- IF PRODUCT ID OF OUR PRODUCTS IS EQUAL TO selectedProductId (THIS WAS IN OUR localStorage) -----*/
    if (product.id === selectedProductId) {
      /*----- LOOP THROUGH SIZES AND SAVE IT IN VARIABLE (ACCUMULATOR) -----*/
      product.size.forEach((size) => {
        productSizeHTML += `
        <button class="size-button">
          ${size}
        </button>
      `;
      });

      /*----- SAVE HTML IN A VARIABLE -----*/
      productHTML = `
        <div class="product-image-container">
          <img src="assets/images/products/${product.image}" class="product-image">
        </div>
        <div>
          <h3 class="product-name">
            ${product.name}
          </h3>
          <p class="product-price">
            $${product.price}
          </p>
          <p class="product-description">
            ${product.description}
          </p>

          <div class="size-button-container">
            ${productSizeHTML}
          </div>

          <div class="quantity-button">
            <button class="subtract-button">
              -
            </button>
            <input type="text" class="quantity-input" placeholder="1">
            <button class="add-button">
              +
            </button>
          </div>

          <button class="add-to-bag-button js-add-to-bag-button" data-id="${product.id}">
            ADD TO BAG
          </button>
        </div>
      `;
    }
  });

  /*----- RENDERING IN HTML -----*/
  document.querySelector('.js-product-container').innerHTML = productHTML;
}

/*----- SAVE THE PRODUCT ID IN localStorage WHEN WE ADD TO BAG -----*/
document.querySelectorAll('.js-add-to-bag-button').forEach((addToBagButton) => {
  addToBagButton.addEventListener('click', () => {
    localStorage.setItem('cartProductId', button.dataset.id);
  });
});