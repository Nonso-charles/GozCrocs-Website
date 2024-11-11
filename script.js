// Mobile Menu Script
 const menuButton = document.getElementById('menu-toggle');
 const mobileMenu = document.getElementById('mobile-menu');

 menuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });
 

  // Cart data
  let cart = [];

  // Add item to cart
  function addToCart(name, price) {
    // Check if item is already in the cart
    let item = cart.find(item => item.name === name);
    if (item) {
      item.quantity += 1; // Update quantity if item already in cart
    } else {
      cart.push({ name, price, quantity: 1 }); // Add new item
    }
    updateCart();
  }

  // Update cart items in the DOM
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear current items

    let totalPrice = 0;
    
    // Loop through each item in the cart and display it
    cart.forEach(item => {
      const itemElement = document.createElement('li');
      itemElement.classList.add('flex', 'justify-between', 'items-center', 'text-lg', 'text-gray-700');
      itemElement.innerHTML = `
        <span>${item.name} (x${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(itemElement);
      totalPrice += item.price * item.quantity;
    });

    // Update total price
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }

