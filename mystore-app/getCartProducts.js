import updateCartValue from "./updateCartValue";

const getCartProductFromLocalStorage = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }

  cartProducts = JSON.parse(cartProducts);
  updateCartValue(cartProducts);
  return cartProducts;
};

export default getCartProductFromLocalStorage;
