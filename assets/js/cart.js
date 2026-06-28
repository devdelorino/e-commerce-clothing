import { cart } from "../data/cart.js";

if (cart.length === 0) {
  console.log('YOUR CART DOESN\'T HAVE A PRODUCT');

  document.querySelector('.js-empty-cart-container').innerHTML = `
    <h1 class="empty-cart-title">
      CART
    </h1>
    <p class="empty-cart-description-text">
      Your cart is currently empty
    </p>
    <a class="empty-shop-link" href="shop.html">Continue shopping</a>
  `;

} else {
  console.log('YOUR CART HAS A PRODUCT');
}