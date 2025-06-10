document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.getElementById("decrease-btn");
    const increaseBtn = document.getElementById("increase-btn");
    const quantityEl = document.getElementById("quantity");
    const totalPriceEl = document.getElementById("total-price");
    const stock = parseInt(document.getElementById("stock").innerText);
    const pricePerItem = 75000;
  
    let quantity = 1;
  
    function updateDisplay() {
      quantityEl.innerText = quantity;
      totalPriceEl.innerText = `Rp${(quantity * pricePerItem).toLocaleString("id-ID")}`;
    }
  
    increaseBtn.addEventListener("click", function () {
      if (quantity < stock) {
        quantity++;
        updateDisplay();
      }
    });
  
    decreaseBtn.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        updateDisplay();
      }
    });
  
    updateDisplay();
  });