export function renderHeader() {
  document.querySelector('.js-header').innerHTML = `
    <a href="shop.html" class="nav-left shop-link-header">
      <div class="shop-header">
        SHOP
      </div>
    </a>

    <a href="index.html" class="nav-inner logo-link-header">
      <div class="logo-header">
        DENVER.CO
      </div>
    </a>
    <a href="cart.html" class="nav-inner">
      <img src="assets/images/icons/cart-icon.svg" class="cart-link-header">
    </a>
    <div class="nav-right">
      <img src="assets/images/icons/account-icon.svg" class="account-link-header">
    </div>
  `;
}