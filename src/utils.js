export const getTotals = (cart, banch_date, branchs) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount } of cart.values()) {
    totalAmount += amount;
  }

  const newBranchs = new Map(branchs);
  const branchId = banch_date.church_branch_id;
  const branch = newBranchs.get(branchId);
  const date = banch_date.date;

  let TotalAbsent_cost = null;
  if (branch) {
    let totalAbsent = null;

    // Find the attendance record for the specified date
    branch.attendance.forEach((record) => {
      if (record.date === date) {
        totalAbsent = record;
      }
    });

    if (totalAbsent) {
      TotalAbsent_cost = totalAbsent.total_absent;
    }
  }

  totalCost = TotalAbsent_cost;

  return { totalAmount, totalCost };
};
