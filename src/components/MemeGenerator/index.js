import {Component} from 'react'
import './index.css'

class MemeGenerator extends Component {
  state = {amount: '0.00'}

  // THIS FUNCTION WILL BE INVOKED WHENEVER YOU CLICK ON THE EACH CARD AND IT CHANGE'S THE STATE VALUE
  onTotalAmount = event => {
    this.setState({amount: event.target.value})
  }

  // THIS FUNCTION WILL BE INVOKED WHENEVER YOU CLICK ON ADD TO CART BUTTON
  addedSuccessfully = e => {
    const {amount} = this.state
    e.preventDefault()
    if (amount !== '0.00') {
      alert('Item Successfully Added To Your Cart.')
    } else {
      alert('Add An Item To Your Cart')
    }
  }

  render() {
    const {amount} = this.state
    return (
      <div className="bg-container">
        <form className="card-container" onSubmit={this.addedSuccessfully}>
          <div className="card-top-headline">
            <hr />
            <h2 className="bundle-title">Bundle & Save</h2>
            <hr />
          </div>
          {/* First Price Card */}
          <div className="card-50-off-container">
            <div className="card-50-oof-first-container">
              <input
                type="radio"
                onChange={this.onTotalAmount}
                value="195.00"
                id="50-off"
                name="discount"
              />
              <label htmlFor="50-off" className="first-container-price-details">
                <p className="one-pair-text">1 Pair</p>
                <p className="DKK-rate">DKK 195.00</p>
              </label>
            </div>
            <p className="disscount-offer-text">50% off</p>
          </div>
          {/* Second Price Card */}
          <div className="card-50-off-container">
            <div className="card-50-oof-first-container">
              <input
                type="radio"
                value="345.00"
                onChange={this.onTotalAmount}
                id="40-off"
                name="discount"
              />
              <label htmlFor="40-off" className="first-container-price-details">
                <p className="one-pair-text">2 Pair</p>
                <div className="card-rate-details">
                  <p className="DKK-rate">DKK 345.00</p>
                  <p
                    className="DKK-rate"
                    style={{textDecoration: 'line-through'}}
                  >
                    DKK 195.00
                  </p>
                </div>
                <div className="size-color-container">
                  <div>
                    <p className="size-text">Size</p>
                    <select>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                    <br />
                    <select>
                      {' '}
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>
                  <div>
                    <p className="size-text">Color</p>
                    <select>
                      <option>Colour</option>
                      <option>Red</option>
                      <option>Green</option>
                    </select>
                    <br />
                    <select>
                      <option>Colour</option>
                      <option>Red</option>
                      <option>Green</option>
                    </select>
                  </div>
                </div>
              </label>
            </div>
            <p className="disscount-offer-text">40% off</p>
          </div>
          {/* Third Price Card */}
          <div className="card-50-off-container">
            <div className="card-50-oof-first-container">
              <input
                type="radio"
                onChange={this.onTotalAmount}
                value="528.00"
                id="60-off"
                name="discount"
              />
              <label htmlFor="60-off" className="first-container-price-details">
                <p className="one-pair-text">3 Pair</p>
                <p className="DKK-rate">DKK 528.00</p>
              </label>
            </div>
            <p className="disscount-offer-text">60% off</p>
          </div>
          <div className="card-bottom-section">
            <p className="free-two-day-shiping-text">Free 2 Day Shipping</p>
            <p className="total-amount-text">
              Total : <span className="total-span-text">DKK {amount}</span>
            </p>
          </div>
          {/* ADD TO CART BUTTON */}
          <button type="submit" className="add-to-cart-button">
            + Add to Cart
          </button>
          {/* POWERED BY TEXT  */}
          <p className="Powered-by-text">Powered by Pumper</p>
        </form>
      </div>
    )
  }
}

export default MemeGenerator
