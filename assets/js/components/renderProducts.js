import { products } from "../../data/products.js";

/*----- CALLING THE FUNCTION THAT GENERATE PRODUCTS AFTER CLICKING -----*/
export function renderCategories() {

  /*----- GENERATING CATEGORY FROM HOME PAGE -----*/
  const category = localStorage.getItem('category');

  if (category === 'tees') {
    renderProducts('tees');

  } else if (category === 'bottoms') {
    renderProducts('bottoms');

  } else if (category === 'outerwear') {
    renderProducts('outerwear');

  } else if (category === 'headwear') {
    renderProducts('headwear');

  } else {
    renderProducts('all');
  }

  /*----- REMOVE CATEGORY IN localStorage -----*/
  localStorage.removeItem('category');

  /*----- RENDERING A CATEGORY IN TITLE BUTTONS  -----*/
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
}


/*----- FUNCTION THAT GENERATE PRODUCTS -----*/
export function renderProducts(categoryParam) {
  let productsHTML = '';
  let totalProductsHTML = 0;

  products.forEach((product) => {
    if (categoryParam === product.category || categoryParam === 'all') {
      productsHTML += `
        <a href="../../../view-product.html" class="product-container-link">
          <div class="product-container" data-id="${product.id}">
            <div class="product-image-container">
              <img src="assets/images/products/${product.image}" class="product-image">
            </div>
            <div class="product-name">
              ${product.name}
            </div>
            <div class="product-price">
              $${product.price}
            </div>
          </div>
        </a>
      `;

      totalProductsHTML += 1;
    }
  });

  /*----- GENERATING PRODUCT TITLES -----*/
  let productsTitleHTML = '';

  if (categoryParam === 'tees') {
    productsTitleHTML = `
      <h1 class="clothes-header">
        TEES
      </h1>
      <p class="clothes-sub-header">
        Essential organic cotton tees. Breathable, durable, and designed for daily wear.
      </p>
    `;
  } else if (categoryParam === 'bottoms') {
    productsTitleHTML = `
      <h1 class="clothes-header">
        BOTTOMS
      </h1>
      <p class="clothes-sub-header">
        From linen to canvas, explore bottoms built for comfort and effortless movement.
      </p>
    `;
  } else if (categoryParam === 'outerwear') {
    productsTitleHTML = `
      <h1 class="clothes-header">
        OUTERWEAR
      </h1>
      <p class="clothes-sub-header">
        Layers for the elements. Sustainable jackets designed to keep you warm and dry.
      </p>
    `;
  } else if (categoryParam === 'headwear') {
    productsTitleHTML = `
      <h1 class="clothes-header">
        HEADWEAR
      </h1>
      <p class="clothes-sub-header">
        The perfect finish. Caps and beanies crafted from sustainable, organic fibers.
      </p>
    `;
  } else {
    productsTitleHTML = `
      <h1 class="clothes-header">
        SHOP ALL
      </h1>
      <p class="clothes-sub-header">
        Browse the full collection. Every sustainable piece we offer, all in one place.
      </p>
    `;
  }

  /*----- RENDERING IN HTML -----*/
  document.querySelector('.js-product-section-grid').innerHTML = productsHTML;
  document.querySelector('.js-clothes-title').innerHTML = productsTitleHTML;
  document.querySelector('.js-total-products').innerHTML = `${totalProductsHTML} items`;

  document.querySelectorAll('.product-container').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('selectedProductId', button.dataset.id);
    });
  });
}
