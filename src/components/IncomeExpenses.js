import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="flex w-full text-center gap-x-1 text-lg font-medium">
      <div className="bg-tertiary flex-1 rounded-lg py-2">
        <h4>Income</h4>
        <p className="text-quaternary">+${income}</p>
      </div>
      <div className="bg-tertiary flex-1 rounded-lg py-2">
        <h4>Expense</h4>
        <p className="text-quinary">-${expense}</p>
      </div>
    </div>
  );
};
