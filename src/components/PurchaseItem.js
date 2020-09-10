import React from 'react'

class PurchaseItem extends React.Component {
  render() {
    const { product } = this.props

    return(
      <div className="purchase-container">
        <span className="item-header">
          {product.name}
        </span>
        <img className="item-image" src={product.image}/>
        <span className="item-price">
          {`$${parseFloat(product.price).toFixed(2)}`}
        </span>
        <div className="add-to-cart">
          Add to Cart
        </div>
      </div>
    )
  }
}

export default PurchaseItem