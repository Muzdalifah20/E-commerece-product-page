const btnIncrease = document.querySelector("#btnIncrease");

const btnDecrease = document.querySelector("#btnDecrease");
const productCount = document.querySelector("#productCount");
const cartPrice = document.querySelector("#cartPrice");
const cartTotal = document.querySelector("#cartTotal");
const btnAddTocart = document.querySelector("#btnAddTocart");
const btnDelete = document.querySelector("#btnDelete");
const btnCart = document.querySelector("#btnCart");
const emptyCartP = document.querySelector(".topnav__cart-empty");
const cartNotEmptyDiv = document.querySelector(".topnav__cart-act");
const cartDiv = document.querySelector(".topnav__cart");
const productCountSpan = document.querySelector(".product-count");

let totalProductCount = 0;
function handleIncrement() {
  if (!btnIncrease) return;
  totalProductCount++;
  productCount.textContent = totalProductCount;
}

function handleDecrement() {
  if (!btnDecrease || totalProductCount === 0) return;
  totalProductCount--;
  productCount.textContent = totalProductCount;
}

function calculateTotalPrice() {
  return 125 * totalProductCount;
}

function updateCartUi() {
  if (!cartPrice) return;
  updateEmptyCartUi();
  const totalPrice = calculateTotalPrice();
  const formatTotalPrice = totalPrice.toFixed(2);
  productCountSpan.textContent = totalProductCount;
  cartPrice.innerHTML = `$125.00 x ${totalProductCount} <span class="topnav__cart-total">$${formatTotalPrice}</span>`;
}

function updateEmptyCartUi() {
  if (!emptyCartP || !cartNotEmptyDiv) return;
  if (totalProductCount === 0) {
    emptyCartP.removeAttribute("hidden");
    cartNotEmptyDiv.setAttribute("hidden", "");
    productCountSpan.setAttribute("hidden", "");
    btnCart.classList.remove("full-cart");
  } else {
    emptyCartP.setAttribute("hidden", "");
    cartNotEmptyDiv.removeAttribute("hidden");
    productCountSpan.removeAttribute("hidden");
    btnCart.classList.add("full-cart");
  }
}

function hideCartDiv() {
  updateEmptyCartUi();
  cartDiv.toggleAttribute("hidden");
  productCountSpan.setAttribute("hidden", "");
  btnCart.classList.remove("full-cart");
}

function handleBtnCart() {
  cartDiv.toggleAttribute("hidden");
}

btnDecrease?.addEventListener("click", handleDecrement);
btnIncrease?.addEventListener("click", handleIncrement);
btnAddTocart?.addEventListener("click", updateCartUi);
btnDelete?.addEventListener("click", updateEmptyCartUi);
btnCart?.addEventListener("click", handleBtnCart);
document.addEventListener("DOMContentLoaded", hideCartDiv);
