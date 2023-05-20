import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import cartItems from "./data";
const CartContainer = ({ attendanceRecord }) => {
  const { cart, clearCart, totalCost, totalAmount, login } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  <h2>not login yet</h2>;

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
          // ...
          if (item.checked === true) {
            return null; // Skip rendering the CartItem component
          }
          return <CartItem key={id} {...item} attendance={attendanceRecord} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            {console.log("tota_________________Amount")}{" "}
            {console.log(totalCost)}
            total Attendence <span>{totalAmount}</span>
          </h5>
        </div>
        <hr />
        <div>
          <h5 className="cart-total">
            {console.log("tota_________________lCost")} {console.log(totalCost)}
            total Absence
            <span>{totalCost}</span>
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
