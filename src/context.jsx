import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import capetownBranch from "./churchDa";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
  branchs: new Map(capetownBranch.map((branch) => [branch._id, branch])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);
  //const { totalAmount, totalCost } = getTotals(state.branchs);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id, attendanceRecord) => {
    dispatch({ type: INCREASE, payload: { id, attendanceRecord } });
  };

  const decrease = (id, attendanceRecord) => {
    dispatch({ type: DECREASE, payload: { id, attendanceRecord } });
  };

  // Function to update attendance record
  const updateAttendanceRecord = (newRecord) => {
    dispatch({ type: "UPDATE_ATTENDANCE_RECORD", payload: newRecord });
  };
  console.log(state);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        updateAttendanceRecord,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
