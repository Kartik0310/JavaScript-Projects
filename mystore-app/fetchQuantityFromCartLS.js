import getCartProductFromLocalStorage from "./getCartProducts"

const fetchQuantityFromCartLS= (id,price)=>{
    let cartProducts = getCartProductFromLocalStorage();

    let existingProduct = cartProducts.find((currentProduct)=> currentProduct.id ===id);
    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price
    }

    return {quantity, price};
}

export default fetchQuantityFromCartLS