import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import cartItems from "./data";
const CartContainer = ({ attendanceRecord }) => {
  const { cart, clearCart, totalCost, totalAmount } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          {
            /* cart items  filtering*/
          }
          if (item.checked === true) {
            return;
          }
          return (
            <CartItem
              key={id}
              {...item}
              attendance={attendanceRecord} // Pass attendanceRecord as a prop
            />
          );
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total Attendence <span>{totalAmount}</span>
          </h5>
        </div>
        <hr />
        <div>
          <h5 className="cart-total">
            total Absence<span>{totalCost}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
