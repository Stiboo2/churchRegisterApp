export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount } of cart.values()) {
    totalAmount += amount;
    totalCost += amount;
  }
  return { totalAmount, totalCost };
};
