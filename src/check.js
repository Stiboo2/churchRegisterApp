import React, { useState } from "react";

const MyComponent = () => {
  const [showMessageBar, setShowMessageBar] = useState(false);
  const [apologySMS, setApologySMS] = useState("");

  const decreaseHandler = (id, attendance) => {
    if (apologySMS !== "") {
      decrease(id, attendance, apologySMS);
      // Reset the input field and hide the message bar
      setApologySMS("");
      setShowMessageBar(false);
    } else {
      // Show the message bar if the input field is empty
      setShowMessageBar(true);
    }
  };

  return (
    <div>
      {showMessageBar && (
        <div>
          Please provide an apology message:
          <input
            type="text"
            value={apologySMS}
            onChange={(e) => setApologySMS(e.target.value)}
          />
        </div>
      )}
      <button onClick={() => decreaseHandler(id, attendance)}>Decrease</button>
    </div>
  );
};
const decreaseHandler = () => {
  const apologySMS = window.prompt("Please enter the apology SMS:");

  if (apologySMS !== null && apologySMS.trim() !== "") {
    const updatedAttendance = attendance.map((item) => {
      return {
        ...item,
        apologySMS: apologySMS,
      };
    });

    decrease(id, updatedAttendance);
  }
};


attendance;

const CartItem = ({ id, img, title, price, amount, attendance, attendanceRecord }) => {
  const { remove, increase, decrease, insetData } = useGlobalContext();

  const increaseHandler = () => {
    increase(id, attendance);
  };

  const decreaseHandler = () => {
    const apologySMS = window.prompt("Please enter the apology SMS:");

    if (apologySMS !== null && apologySMS.trim() !== "") {
      const updatedAttendance = {
        ...attendance,
        apologySMS: apologySMS,
      };

      decrease(id, updatedAttendance, attendanceRecord);
    }
  };

  // ...

  return (
    // JSX code for the CartItem component
  );
};

export default CartItem;


import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { useEffect, useState } from "react";

const CartItem = ({ id, img, title, price, amount, attendance }) => {
  const { remove, increase, decrease, insetData } = useGlobalContext();
  const [apologySMS, setApologySMS] = useState("");

  const increaseHandler = () => {
    increase(id, attendance);
  };

  const decreaseHandler = () => {
    const input = window.prompt("Please enter the apology SMS:");

    if (input !== null && input.trim() !== "") {
      setApologySMS(input.trim());
    }
  };

  useEffect(() => {
    if (apologySMS !== "") {
      const updatedAttendance = {
        ...attendance,
        apologySMS: apologySMS,
      };

      decrease(id, updatedAttendance);
    }
  }, [apologySMS]);

  useEffect(() => {
    insetData(attendance);
  }, [attendance, insetData]);

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


const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
  branchs: new Map(capetownBranch.map((branch) => [branch._id, branch])),
  attendance: null, // Add the attendance variable to the initial state
};


// Function to update attendance data
const updateAttendanceData = (attendanceData) => {
  dispatch({ type: "UPDATE_ATTENDANCE_DATA", payload: attendanceData });
};

const insetData = (attendanceRecord) => {
  updateAttendanceData(attendanceRecord);
};
 