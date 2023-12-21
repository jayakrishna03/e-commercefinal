// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let count = 0
      const countPrice = item => {
        count = count + item.price * item.quantity
        return null
      }
      cartList.map(item => countPrice(item))

      return (
        <div className="main-div">
          <h2 className="h1">
            <span>Order Total:</span> Rs{count}/-
          </h2>
          <p className="p1">{cartList.length} Items in cart</p>
          <button type="button" className="chekout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
