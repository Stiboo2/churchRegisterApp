import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { useEffect } from "react";

const CartItem = ({ id, img, title, surname, branch, attendance }) => {
  const { remove, increase, decrease, insetData, updateAttendanceRecord } =
    useGlobalContext();

  const increaseHandler = () => {
    increase(id, attendance);
  };

  useEffect(() => {
    updateAttendanceRecord(attendance);
  }, [attendance]);

  const decreaseHandler = () => {
    const apologySMS = window.prompt("Please enter the apology SMS:");

    if (apologySMS !== null && apologySMS.trim() !== "") {
      const updatedAttendance = {
        ...attendance,
        apologySMS: apologySMS,
      };

      decrease(id, updatedAttendance);
    }
  };

  useEffect(() => {
    insetData(attendance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attendance]);
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">{surname}</span>
        <span className="item-price">{branch}</span>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={increaseHandler}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* remove */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
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
