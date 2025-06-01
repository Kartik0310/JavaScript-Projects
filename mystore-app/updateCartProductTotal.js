import getCartProductFromLocalStorage from "./getCartProducts"

const updateCartProductTotal = ()=>{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let localCartProducts = getCartProductFromLocalStorage();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accumulator, currentElement)=>{
        let productPrice = parseInt(currentElement.price) || 0;
        return accumulator + productPrice;
    },initialValue)

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹ ${totalProductPrice + 50}`;
   
}

export default updateCartProductTotal