import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

renderCart();

function renderCart() {
  if (cart.length === 0) {

    document.querySelector('.js-empty-cart-container').innerHTML = `
      <div class=empty-cart-container>
        <h1 class="empty-cart-title">
          CART
        </h1>
        <p class="empty-cart-description-text">
          Your cart is currently empty.
        </p>
        <a class="empty-shop-link" href="shop.html">Continue shopping</a>
      </div>
    `;

    document.querySelector('.js-cart-container').innerHTML = '';

  } else {
    let subtotal = 0;
    let shipping = 10;
    let total = 0;
    let cartTitleHTML = `
      <h3 class="shopping-bag-title">
        YOUR CART
      </h3>
    `;
    let productHTML = '';
    let orderSummaryHTML = '';

    cart.forEach((cart) => {
      products.forEach((product) => {
        if (cart.id === product.id) {
          productHTML += `
          <div class="product-container">
            <div class="row-1-product-container">
              <div class="product-image-container">
                <img src="assets/images/products/${product.image}" class="product-image">
              </div>
              <h3 class="product-name">
                ${product.name}
              </h3>
              <h2>
                $${product.price}
              </h2>
            </div>
            <div class="row-2-product-container">
              <div class="js-delete-button" data-id="${cart.id}">
                <img src="assets/images/icons/delete-icon.svg" class="delete-icon">
              </div>
              <h4 class="size-text">
                ${cart.size}
              </h4>
              <div class="button-container">
                <div class="add-button js-add-button" data-id="${cart.id}">
                  +
                </div>
                <input type="number" class="quantity-input" value="${cart.quantity}">
                <div class="subtract-button js-subtract-button" data-id="${cart.id}">
                  -
                </div>
              </div>
            </div>
          </div>
        `;

          subtotal += product.price * cart.quantity;
        }
      });
    });

    total = subtotal + shipping;

    orderSummaryHTML += `
      <div class="order-summary-container">
        <h2 class="order-summary-title">
          ORDER SUMMARY
        </h2>
        <div class="subtotal-container">
          <h4 class="subtotal-text">
            Subtotal
          </h4>
          <h3 class="subtotal-price">
            $${subtotal}
          </h3>
        </div>
        <div class="shipping-container">
          <h4 class="shipping-text">
            Shipping
          </h4>
          <h3 class="shipping-price">
            $${shipping}
          </h3>
        </div>
        <div class="total-container">
          <h3>
            TOTAL
          </h3>
          <h3>
            $${total}
          </h3>
        </div>

        <button class="checkout-button">
          CHECKOUT
        </button>
      </div>
    `;

    document.querySelector('.js-cart-title').innerHTML = cartTitleHTML;
    document.querySelector('.js-products-grid').innerHTML = productHTML;
    document.querySelector('.js-order-summary-container').innerHTML = orderSummaryHTML;

    deleteCart();

    editQuantity();
  }
}

/*----- EDIT PRODUCT QUANTITY -----*/
function editQuantity() {

  /*----- ADD QUANTITY BUTTON -----*/
  document.querySelectorAll('.js-add-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;

      cart.forEach((cartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity += 1;
        }
      });

      console.log(cart);

      localStorage.setItem('localStorageCart', JSON.stringify(cart));

      renderCart();
    });
  });

  /*----- SUBTRACT QUANTITY BUTTON -----*/
  document.querySelectorAll('.js-subtract-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;

      cart.forEach((cartItem, index) => {
        if (cartItem.id === productId) {
          cartItem.quantity -= 1;

          if (cartItem.quantity <= 0) {
            cart.splice(index, 1);
          }

          console.log(cart);

          localStorage.setItem('localStorageCart', JSON.stringify(cart));

          renderCart();
        }
      });
    });
  });
}

/*----- DELETE PRODUCT FROM CART -----*/
function deleteCart() {
  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      const deleteId = deleteButton.dataset.id;

      cart.splice(index, 1);

      console.log(cart);

      localStorage.setItem('localStorageCart', JSON.stringify(cart));

      renderCart();
    });
  });
}