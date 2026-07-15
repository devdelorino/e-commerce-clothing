import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

renderHeader();
renderFooter();

/*----- WHEN CLICKING A CATEGORY, IT GOES TO A SPECIFIC CATEGORY IN SHOP -----*/
document.querySelectorAll('.product-container').forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.setItem('category', button.dataset.category);

    window.location.href = 'shop.html';
  });
});