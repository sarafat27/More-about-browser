const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const key in cart) {
        displayProduct(key)
    }
}

const addItem = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    if (!inputText) {
        return;
    }
    //display in the ui
    displayProduct(inputText)

    //add to local storage
    addProductToCart(inputText);


    inputField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li)
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj
}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCart();