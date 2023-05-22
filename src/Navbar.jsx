import { FaChurch } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  const buttonHandle = () => {
    console.log("button pressed");
  };
  return (
    <nav>
      <div className="nav-center">
        <h4>Cape Town Branch Atendanceny Regisire App</h4>
        <button className="cart-button" onClick={buttonHandle}>
          <FaChurch className="cart-icon" />
          <div className="nav-container">
            <div className="amount-container">
              <p className="total-amount">{totalAmount}</p>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
