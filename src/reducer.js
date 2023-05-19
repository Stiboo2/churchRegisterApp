import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
  NEW_BRANCH_DATE,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    const newBranchs = new Map(state.branchs);
    const branchId = action.payload.attendanceRecord.church_branch_id;
    const branch = newBranchs.get(branchId);

    const newItem = {
      ...item,
      amount: item.amount + 1,
      checked: true,
      attendance: [...item.attendance, action.payload.attendanceRecord], // Update attendance record
    };
    newCart.set(itemId, newItem);
    if (branch) {
      const newBranch = {
        ...branch,
        attendance: branch.attendance.map((attendance) => {
          if (attendance.date === action.payload.attendanceRecord.date) {
            return {
              ...attendance,
              total_attended: attendance.total_attended
                ? attendance.total_attended + 1
                : 1,
            };
          }
          return attendance;
        }),
      };
      newBranchs.set(branchId, newBranch); // Update the branch in the branchs Map
      //return { ...state, cart: newCart, branchs: newBranchs };
    }

    // newBranchs.set(branchId, newBranch); // Update the branch in the branchs Map
    //newCart.set(itemId, newItem);
    return { ...state, cart: newCart, branchs: newBranchs };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = {
      ...item,
      amount: item.amount - 1,
      checked: true,
      attendance: [...item.attendance, action.payload.attendanceRecord], // Update attendance record
    };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  }
  if (action.type === NEW_BRANCH_DATE) {
    const newBranchs = new Map(state.branchs);
    const branchId = action.payload.attendanceRecord.church_branch_id;
    const branch = newBranchs.get(branchId);
    if (branch) {
      const newBranch = {
        ...branch,
        attendance: [
          ...branch.attendance,
          {
            total_attended: 0,
            date: action.payload.attendanceRecord.date,
            pastor_id: action.payload.attendanceRecord.pastor_id,
          },
        ],
      };
      newBranchs.set(branchId, newBranch); // Update the branch in the branchs Map
      return { ...state, branchs: newBranchs };
    }
  }

  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
