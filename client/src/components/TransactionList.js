import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(()=> {
    getTransactions();
    
  },[])

  return (
    <>
      <div>
        <h3 className="text-2xl md:text-3xl font-medium relative mb-6">
          History
          <span className="underline h-0.5 w-full absolute left-0 -bottom-2 mx-auto bg-white"></span>
        </h3>
        <ul className="flex flex-col gap-y-2.5">
          {transactions.map((transaction, index) => {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
        </ul>
      </div>
    </>
  );
};
