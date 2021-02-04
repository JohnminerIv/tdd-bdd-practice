// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  if (w < 0 || h < 0){
    return null
  } else {
    return w * h
  }
}

const perimeter = (w, h) => {
  // should return the perimeter
  if (w < 0 || h < 0){
    return null
  } else {
    return (w * 2) + (h * 2)
  }
}

const circleArea = r => {
  // should return the area of the circle
  if (r < 0) {
    return null
  } else {
    return 3.1415926 * Math.pow(r, 2)
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  for (let i = 0; i < shoppingCart.length; i++){
    if (shoppingCart[i]["name"] === item["name"] &&
      shoppingCart[i]["price"] === item["price"]){
        shoppingCart[i]["quantity"] += 1
        return
    }
  }
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  let numItemsInCart = 0
  for (let i = 0; i < shoppingCart.length; i++){
    numItemsInCart += shoppingCart[i]["quantity"]
  }
  return numItemsInCart
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  for (let i = 0; i < shoppingCart.length; i++){
    if (shoppingCart[i]["name"] === item["name"] &&
      shoppingCart[i]["price"] === item["price"]){
        console.log(shoppingCart[i]["name"])
        console.log(shoppingCart[i]["quantity"])
        shoppingCart[i]["quantity"] -= 1
        if (shoppingCart[i].quantity === 0){
          console.log(shoppingCart.splice(i, 1))
        }
        return
    }
  }
  throw "Item not in shoppingcart"
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
