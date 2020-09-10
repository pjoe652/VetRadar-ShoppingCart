import React from 'react';
import './App.css';
import { products } from './constants/index'
import PurchaseItem from './components/PurchaseItem';
import CartItem from './components/CartItem';

class App extends React.Component<any, any> {
  state = {
    shoppingCart: []
  }

  addToCart = (newItem: any, image: any) => {
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
      updatedShoppingCart.push({name: newItem, image: image, quantity: 1})
    }

    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }

  updateItem = (updatedItem: any, value: any) => {
    const { shoppingCart } = this.state

    let updatedShoppingCart : any = [...shoppingCart]

    updatedShoppingCart.forEach((item:any) => {
      if(item && item.name === updatedItem) {
        if(value > 0) {
          item.quantity++
        } else {
          item.quantity--
        }
      }
    })

    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }

  render() {
    const { shoppingCart } = this.state

    return (
      <div className="App">
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
            {
              shoppingCart.map(product => {
                return(
                  <CartItem product={product} updateItem={this.updateItem}/>
                )
              })
            }
          </div>
          <div className="summary-container">
            Test 2
          </div>
        </div>
      </div>
    );
  }
};

export default App;
