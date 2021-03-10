import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const borderColor = transaction.amount >= 0 ? "bg-quaternary" : "bg-quinary";
  const textColor =
    transaction.amount >= 0 ? "text-quaternary" : "text-quinary";

  return (
    <>
      <li className="flex history-list-item text-sm md:text-base">
        <div className="inline-flex justify-between w-full bg-tertiary overflow-hidden p-1.5 pl-4 rounded-lg relative">
          <span> {transaction.text}</span>
          <div className="flex">
            <span className={`mr-4 ${textColor}`}>
              {sign}${numberWithCommas(Math.abs(transaction.amount))}
            </span>
            <button
              className="transition-all duration-300 history-list-item__btn bg-tertiary h-full mr-2 right-0 top-0 transform translate-x-6 w-0 opacity-1 text-white"
              onClick={() => deleteTransaction(transaction._id)}
            >
              x
            </button>
            <div
              className={`transition-all duration-300 h-full w-2 ${borderColor} top-0 right-0 absolute rounded-lg`}
            ></div>
          </div>
        </div>
      </li>
      <style jsx>{`
        .history-list-item__btn:focus {
          opacity: 1;
          transform: translateX(0);
          width: 1.5rem;
        }
        .history-list-item:hover .history-list-item__btn {
          opacity: 1;
          transform: translateX(0);
          width: 1.5rem;
        }
      `}</style>
    </>
  );
};
