import React from 'react'

class Summary extends React.Component {
  render() {
    const { totalPrice, totalQuantity, shippingCost, updateShipping } = this.props

    return(
      <div className="summary-container">
        <span className="summary-header">
          Cart Summary
        </span>
        <div className="cart-summary-container">
          <div className="value-field-container">
            <div className="initial-cost">
              <span className="summary-field">
                {`${totalQuantity} items`}
              </span>
              <span className="summary-field">
                {`$${parseFloat(totalPrice).toFixed(2)}`}
              </span>
            </div>
            <div className="shipping-container">
              <div className="initial-cost">
                <span className="summary-field">
                  {`${totalQuantity} items`}
                </span>
                <span className="summary-field">
                  {`$${parseFloat(totalPrice).toFixed(2)}`}
                </span>
              </div>
              <select name="shipping" onChange={(e) => updateShipping(e.target.value)}>
                <option value={5}>
                  Express - $5
                </option>
                <option value={10}>
                  Overnight - $10
                </option>
              </select> 
            </div>
          </div>
          <div className="confirmation-container">
            <div className="total-cost">
              <span>
                Total Cost
              </span>
              <span>
                {`$${parseFloat(totalPrice + parseInt(shippingCost)).toFixed(2)}`}
              </span>
            </div>
            <div className="checkout-button">
              Checkout
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary