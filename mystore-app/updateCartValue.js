const cartValue = document.querySelector("#cartValue");

const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = `
    <i class= "fa-solid fa-cart-shopping"> ${cartProducts.length} </i>
    `);
};

export default updateCartValue;
