import getCartProductFromLocalStorage from "./getCartProducts";
import updateCartProductTotal from "./updateCartProductTotal";

const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProducts = getCartProductFromLocalStorage();

  let existingProduct = localCartProducts.find(
    (currentProduct) => currentProduct.id === id
  );

  if (existingProduct) {
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, quantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((currentProduct) => {
    return currentProduct.id === id ? updatedCart : currentProduct;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  updateCartProductTotal();
};

export default incrementDecrement;
