export function renderFooter() {
  document.querySelector('.js-footer').innerHTML = `
    <div class="sections">
      <div class="section-1">
        <h3 class="shop-section-footer">
          SHOP
        </h3>
        <p class="shop-section">
          All
        </p>
        <p class="shop-section">
          Tees
        </p>
        <p class="shop-section">
          Bottoms
        </p>
        <p class="shop-section">
          Outerwear
        </p>
        <p class="shop-section">
          Headwear
        </p>
      </div>

      <div class="section-2">
        <h3 class="brand-section-footer">
          BRAND
        </h3>
        <p class="brand-section">
          About
        </p>
        <p class="brand-section">
          Contact
        </p>
        <p class="brand-section">
          Size Guide
        </p>
        <p class="brand-section">
          Privacy Policy
        </p>
        <p class="brand-section">
          Terms & Conditions
        </p>
        <p class="brand-section">
          Returns
        </p>
        <p class="brand-section">
          Track an Order
        </p>
      </div>

      <div class="section-3">
        <h3 class="socials-section-footer">
          SOCIALS
        </h3>
        <p class="socials-section">
          Facebook
        </p>
        <p class="socials-section">
          Instagram
        </p>
        <p class="socials-section">
          X
        </p>
        <p class="socials-section">
          Linkedin
        </p>
        <p class="socials-section">
          Youtube
        </p>
      </div>
    </div>
    <div class="logo-footer">
      DLRN
    </div>
  `;
}