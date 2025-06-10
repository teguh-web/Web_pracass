let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price: parseInt(price), qty: 1 });
  }
  saveCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalCount;

  if (cartItems) {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      const itemTotal = item.qty * item.price;
      total += itemTotal;
      li.innerHTML = `
        <span>${item.name} x${item.qty} = Rp${itemTotal.toLocaleString()}</span>
        <button onclick="removeFromCart(${index})">Hapus</button>
      `;
      cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toLocaleString();
  }
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.classList.toggle('show');
}

function clearCart() {
  cart = [];
  saveCart();
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    addToCart(name, price);
  });
});

function checkoutCart() {
  if (cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }
  window.location.href = 'pembayaran.html';
}


document.addEventListener('DOMContentLoaded', updateCartDisplay);