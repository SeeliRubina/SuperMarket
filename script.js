let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  cartTotal += price;
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  
  cartItemsElement.innerHTML = "";
  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(listItem);
  });
  
  cartTotalElement.textContent = cartTotal;
}