import fetchQuantityFromCartLS from "./fetchQuantityFromCartLS";
import getCartProductFromLocalStorage from "./getCartProducts";
import incrementDecrement from "./incrementDecrement";
import removeProductFromCart from "./removeProductFromCart";
import updateCartProductTotal from "./updateCartProductTotal";
import updateCartValue from "./updateCartValue";
import products from "/api/products.json";

let cartProducts = getCartProductFromLocalStorage();

let filterProducts = products.filter((currentProduct) => {
  return cartProducts.some((currentElement) => {
    return currentElement.id === currentProduct.id;
  });
});

const cartElements = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProducts = () => {
  filterProducts.forEach((currentProduct) => {
    const { category, id, image, name, stock, price } = currentProduct;

    let productClone = document.importNode(templateContainer.content, true);

    const lsActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent =
      lsActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lsActualData.price;

      productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProductFromCart(id);
      });

    cartElements.append(productClone);
  });
};
showCartProducts();

updateCartProductTotal();
