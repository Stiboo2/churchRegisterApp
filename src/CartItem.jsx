import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount, attendance }) => {
  const { remove, increase, decrease } = useGlobalContext();

  const increaseHandler = () => {
    increase(id, attendance);
  };

  const decreaseHandler = () => {
    decrease(id, attendance);
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={increaseHandler}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* remove */}
        <button className="remove-btn" onClick={() => remove(id)}>
          NoReaport
        </button>
        {/* decrease amount */}
        <button className="amount-btn" onClick={decreaseHandler}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
