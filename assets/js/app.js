document.querySelectorAll('.product-container').forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.setItem('category', button.dataset.category);

    window.location.href = 'shop.html';
  });
});