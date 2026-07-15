import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

renderHeader();
renderFooter();
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
    console.log(cart);

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

    cart.forEach((cartItem, index) => {
      products.forEach((product) => {
        if (cartItem.id === product.id) {
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
              <div class="js-delete-button" data-index="${index}">
                <img src="assets/images/icons/delete-icon.svg" class="delete-icon">
              </div>
              <h4 class="size-text">
                ${cartItem.size}
              </h4>
              <div class="button-container">
                <div class="add-button js-add-button" data-index="${index}">
                  +
                </div>
                <input type="number" class="quantity-input" value="${cartItem.quantity}">
                <div class="subtract-button js-subtract-button" data-index="${index}">
                  -
                </div>
              </div>
            </div>
          </div>
        `;

          subtotal += product.price * cartItem.quantity;
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
      const index = Number(button.dataset.index);

      cart[index].quantity++;

      localStorage.setItem('localStorageCart', JSON.stringify(cart));

      renderCart();
    });
  });

  /*----- SUBTRACT QUANTITY BUTTON -----*/
  document.querySelectorAll('.js-subtract-button').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);

      cart[index].quantity--;

      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }

      localStorage.setItem('localStorageCart', JSON.stringify(cart));

      renderCart();
    });
  });
}

/*----- DELETE PRODUCT FROM CART -----*/
function deleteCart() {
  document.querySelectorAll('.js-delete-button').forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
      const index = Number(deleteButton.dataset.index);

      cart.splice(index, 1);

      localStorage.setItem('localStorageCart', JSON.stringify(cart));

      renderCart();
    });
  });
}