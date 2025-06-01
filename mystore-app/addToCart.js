import getCartProductFromLocalStorage from "./getCartProducts";
import showToast from "./showToast";
import updateCartValue from "./updateCartValue";

getCartProductFromLocalStorage();

const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocalStorage();

  const currentProductElement = document.querySelector(`#card${id}`);
  let quantity =
    currentProductElement.querySelector(".productQuantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProduct = arrLocalStorageProduct.find(
    (currentProduct) => currentProduct.id === id
  );

  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorageProduct.map((currentProduct) => {
      return currentProduct.id === id ? updatedCart : currentProduct;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    showToast("add", id);
  }

  if (existingProduct) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);

  showToast("add", id);
};

export default addToCart;
