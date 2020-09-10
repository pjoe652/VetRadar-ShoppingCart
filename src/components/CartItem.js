import React from 'react'

class CartItem extends React.Component {
  render() {
    const { product, updateItem, removeItem } = this.props

    return(
      <div className="cart-item-container">
        <img className="cart-image" src={product.image} alt="" />
        <div className="cart-content">
          <div className="cart-description">
            <div className="cart-name-header">
              <span className="cart-item-name">
                {product.name}
              </span>
              <span className="delete-item" onClick={() => removeItem(product.name)}>
                X
              </span>
            </div>
            <div className="quantity-container">
              <div className="quantity-box" onClick={() => updateItem(product.name, "subtract")}>
                <span>
                  -
                </span>
              </div>
              <input className="quantity-box input" value={product.quantity} onChange={(e) => updateItem(product.name, null, e.target.value)}/>
              <div className="quantity-box" onClick={() => updateItem(product.name, "add")}>
                <span>
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="cart-price-tally">
            <span className="price-tag">
              {product.price}
            </span>
            <span className="price-total">
              {`Total: ${product.price}`}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem