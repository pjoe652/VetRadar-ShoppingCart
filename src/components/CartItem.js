import React from 'react'

class CartItem extends React.Component {
  render() {
    const { product, updateItem } = this.props

    return(
      <div className="cart-item-container">
        <img className="cart-image" src={product.image} alt="" />
        <div className="cart-description">
          <div className="cart-name-header">
            <span className="cart-item-name">
              {product.name}
            </span>
            <span className="delete-item">
              X
            </span>
          </div>
          <div className="quantity-container">
            <div className="quantity-box" onClick={product.quantity < 2 ? null : updateItem(-1)}>
              <span>
                -
              </span>
            </div>
            <input className="quantity-box input" value={product.quantity}/>
            <div className="quantity-box" onClick={() => updateItem(1)}>
              <span>
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem