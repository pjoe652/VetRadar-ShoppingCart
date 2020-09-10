import React from 'react';
import './App.css';
import { products } from './constants/index'
import PurchaseItem from './components/PurchaseItem';

class App extends React.Component<any, any> {
  state = {
    shoppingCart: []
  }

  addToCart = (item: any) => {
    const { shoppingCart } = this.state
    shoppingCart.find((product:any, i:number) => {
      if (product.name === item.name) {
        console.log("test")
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="purchase-row-container">
          {
            products.map(product => {
              return(
                <PurchaseItem product={product}/>
              )
            })
          }
        </div>
      </div>
    );
  }
};

export default App;
