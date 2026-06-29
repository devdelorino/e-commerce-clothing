import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

const selectedProductId = localStorage.getItem('selectedProductId');
let quantity = 1;

renderProduct();
editQuantity();
chooseSizeNSaveToCart();

/*----- RENDER PRODUCT IN HTML -----*/
function renderProduct() {
  let productHTML = '';
  let productSizeHTML = '';

  /*----- LOOPING THROUGH PRODUCTS -----*/
  products.forEach((product) => {
    /*----- IF PRODUCT ID OF OUR PRODUCTS IS EQUAL TO selectedProductId (THIS WAS IN OUR localStorage) -----*/
    if (product.id === selectedProductId) {

      /*----- LOOP THROUGH SIZES AND SAVE IT IN VARIABLE (ACCUMULATOR) -----*/
      product.size.forEach((size, index) => {
        productSizeHTML += `
        <button class="size-button js-size-button" data-size="${product.size[index]}">
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
            <button class="subtract-button js-subtract-button">
              -
            </button>
            <input type="number" class="quantity-input js-quantity-input">
            <button class="add-button js-add-button">
              +
            </button>
          </div>

          <button class="add-to-bag-button js-add-to-bag-button">
            ADD TO BAG
          </button>
        </div>
      `;
    }
  });

  /*----- RENDERING IN HTML -----*/
  document.querySelector('.js-product-container').innerHTML = productHTML;
}

/*----- EDIT PRODUCT'S QUANTITY -----*/
function editQuantity() {
  /*----- CREATE A DEFAULT QUANTITY VALUE -----*/

  document.querySelector('.js-quantity-input').value = quantity;

  document.querySelector('.js-subtract-button').addEventListener('click', () => {
    quantity = Number(document.querySelector('.js-quantity-input').value);
    if (quantity > 1) {
      quantity -= 1;

      document.querySelector('.js-quantity-input').value = quantity;
    }
  });

  document.querySelector('.js-add-button').addEventListener('click', () => {
    quantity = Number(document.querySelector('.js-quantity-input').value);
    quantity += 1;

    document.querySelector('.js-quantity-input').value = quantity;
  });
}

/*----- CHOOSE THE SIZE FOR THE PRODUCT AND SAVE IT TO CART -----*/
function chooseSizeNSaveToCart() {
  /*----- LOOP THROUGH SIZES AND GET THE CLICKED SIZE AND SAVE IT IN VARIABLE BY USING DATASET -----*/
  let sizeResult = '';

  document.querySelectorAll('.js-size-button').forEach((sizeButton) => {
    sizeButton.addEventListener('click', () => {
      sizeResult = sizeButton.dataset.size;
    });
  });

  document.querySelector('.js-add-to-bag-button').addEventListener('click', () => {
    quantity = Number(document.querySelector('.quantity-input').value);

    /*----- IF THERE'S NO SIZE CLICKED (FASLY VALUE) -----*/
    if (!sizeResult) {

      /*----- IF THERE'S SIZE CLICKED (TRUTHY VALUE) AND QUANTITY INPUT IS NOT 0 -----*/
    } else if (sizeResult && quantity !== 0) {

      /*----- FIND MATCHING CART, AND IF IT FINDS IT, IT GETS THE WHOLE INDEX ONCE THE CONDITION IS TRUE AT A SPECIFIC ITERATION -----*/
      const findMatchingCart = cart.find(cartItem => cartItem.id === selectedProductId && cartItem.size === sizeResult);

      /*----- IF TRUTHY -----*/
      if (findMatchingCart) {
        /*----- findMatchingCart POINTS TO THE SAME OBJECT (REFERENCE) -----*/
        findMatchingCart.quantity += quantity;

      } else {
        cart.push(
          {
            id: selectedProductId,
            size: sizeResult,
            quantity: quantity
          }
        );
      }

      localStorage.setItem('localStorageCart', JSON.stringify(cart));

      console.log(cart);
    }
  });
}