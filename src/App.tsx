import React from 'react';
import './App.css';
import { products } from './constants/index'
import PurchaseItem from './components/PurchaseItem';
import CartItem from './components/CartItem';
import Summary from './components/Summary';

class App extends React.Component<any, any> {
  state = {
    shoppingCart: [],
    shipping: 5
  }

  addToCart = (newItem: any, image: any, price: any) => {
    const { shoppingCart } = this.state

    let updatedShoppingCart : any = [...shoppingCart]

    let itemFound = false

    updatedShoppingCart.forEach((item:any) => {
      if(item && item.name === newItem) {
        item.quantity++
        itemFound = true
      }
    })

    if (!itemFound) {
      updatedShoppingCart.push({name: newItem, image: image, quantity: 1, price: price})
    }

    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }

  updateItem = (updatedItem: any, change: any, updatedValue: any) => {
    const { shoppingCart } = this.state

    let updatedShoppingCart : any = [...shoppingCart]

    updatedShoppingCart.forEach((item:any) => {
      
      if(item && item.name === updatedItem) {
        if (updatedValue) {
          item.quantity = parseInt(updatedValue)
        } else if (change === "add") {
          item.quantity++
        } else if (change === "subtract" && item.quantity !== 1) {
          item.quantity--
        }
      }
    })

    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }

  removeItem = (removedItem: any) => {
    const { shoppingCart } = this.state

    let updatedShoppingCart : any = [...shoppingCart]

    updatedShoppingCart = updatedShoppingCart.filter((item:any) => item.name !== removedItem)

    console.log(updatedShoppingCart)

    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }

  updateShipping = (shippingCost: any) => {
    this.setState({
      shipping: shippingCost
    })
  }

  render() {
    const { shoppingCart, shipping } = this.state

    let totalPrice = 0
    let totalQuantity = 0

    shoppingCart.forEach((item:any) => {
      totalPrice += item.quantity * item.price
      totalQuantity += item.quantity
    })

    return (
      <div className="App">
        <span className="purchase-row-header">
          Catalogue
        </span>
        <div className="purchase-row-container">
          {
            products.map(product => {
              return(
                <PurchaseItem product={product} addToCart={this.addToCart}/>
              )
            })
          }
        </div>
        <div className="shopping-cart-container">
          <div className="current-cart-container">
            <div className="current-cart-header">
              <span>
                Shopping Cart
              </span>
              <span>
                {`${totalQuantity} items`}
              </span>
            </div>
            {
              shoppingCart.map(product => {
                return(
                  <CartItem product={product} updateItem={this.updateItem} removeItem={this.removeItem}/>
                )
              })
            }
          </div>
          <Summary totalPrice={totalPrice} totalQuantity={totalQuantity} shippingCost={shoppingCart.length <= 0 ? 0 : shipping} updateShipping={this.updateShipping}/>
        </div>
      </div>
    );
  }
};

export default App;
