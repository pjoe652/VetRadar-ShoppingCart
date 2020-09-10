import React from 'react';
import './App.css';
import { products } from './constants/index'
import PurchaseItem from './components/PurchaseItem';

class App extends React.Component<any, any> {
  state = {
    shoppingCart: []
  }

  addToCart = (newItem: any) => {
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
      updatedShoppingCart.push({name: newItem, quantity: 1})
    }

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
            Test 1
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
