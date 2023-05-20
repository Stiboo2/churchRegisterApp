export const getTotals = (cart, banch_date, branchs) => {
  let totalAmount = 0;
  let totalCost = 0;

  const newBranchs = new Map(branchs);
  const branchId = banch_date.church_branch_id;
  const branch = newBranchs.get(branchId);
  const date = banch_date.date;

  let TotalAttend_amount = 0;
  let Day_attendance_cost = 0;
  if (branch) {
    let Day_attendance = null;

    // Find the attendance record for the specified date
    branch.attendance.forEach((record) => {
      if (record.date === date) {
        Day_attendance = record;
      }
    });

    if (Day_attendance) {
      Day_attendance_cost = Day_attendance.total_absent;
      TotalAttend_amount = Day_attendance.total_attended;
    }
  }
  totalAmount = TotalAttend_amount;
  totalCost = Day_attendance_cost;
  console.log("totalAmount");
  console.log(totalAmount);
  console.log("totalAmount");
  console.log(totalCost);
  return { totalAmount, totalCost };
};
