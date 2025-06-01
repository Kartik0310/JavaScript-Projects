import getCartProductFromLocalStorage from "./getCartProducts";
import showToast from "./showToast";
import updateCartProductTotal from "./updateCartProductTotal";
import updateCartValue from "./updateCartValue";

const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLocalStorage();
  cartProducts = cartProducts.filter(
    (currentProduct) => currentProduct.id !== id
  );

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", id)
  }

  updateCartProductTotal();
  
  updateCartValue(cartProducts);
};

export default removeProductFromCart;
