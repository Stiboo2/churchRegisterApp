import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";

import capetownBranch from "./churchDa";
import memberS from "./components/Data/membersData";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
  NEW_BRANCH_DATE,
  UPDATE_ATTENDANCE_RECORD,
} from "./actions";
import { getTotals } from "./utils";

const AppContext = createContext();

const initialState = {
  logging: false,
  loading: false,
  cart: new Map(memberS.map((item) => [item.id, item])),
  branchs: new Map(capetownBranch.map((branch) => [branch._id, branch])),
  branch_Date: {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(
    state.cart,
    state.branch_Date,
    state.branchs
  );
  const login = state.logging;
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
  const updateAttendanceRecord = (branch_Date) => {
    dispatch({ type: UPDATE_ATTENDANCE_RECORD, payload: { branch_Date } });
  };

  const insetData = (attendanceRecord) => {
    dispatch({ type: NEW_BRANCH_DATE, payload: { attendanceRecord } });
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
        insetData,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
