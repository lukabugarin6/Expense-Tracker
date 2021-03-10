import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  }

  return (
    <>
      <div className="bg-secondary p-6 rounded-2xl text-lg">
        <h3 className="font-medium text-xl md:text-2xl mb-4">Add new transaction</h3>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col">
            <div className="flex flex-col my-2 relative">
              <input
                type="text"
                id="text"
                className="flex-grow-1 pt-4 pb-0.5 pl-4 text-tertiary"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <label
                htmlFor="text"
                className={`${
                  text !== "" ? "notEmpty-input__label" : ""
                } text-input text-base font-bold mb-1 absolute text-tertiary left-4 top-2 text-lg md:text-xl`}
              >
                Text
              </label>
            </div>
            <div className="flex flex-col my-2 relative">
              <input
                type="number"
                id="amount"
                className={`flex-grow-1 pt-4 pb-0.5 pl-4 text-tertiary`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <label
                htmlFor="amount"
                className={`${
                  amount !== "" ? "notEmpty-input__label" : ""
                } amount-input text-base font-bold mb-1 absolute text-tertiary left-4 top-2 text-lg md:text-xl`}
              >
                Amount <br />{" "}
              </label>
            </div>
            <button className="transition-all duration-300 text-base bg-primary w-full p-2 mt-4 rounded-lg font-medium hover:bg-blue-100 hover:text-tertiary">
              Add transaction
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        label {
          transition: all 0.5s;
          text-align: left;
        }
        input:focus + label,
        .notEmpty-input__label {
          transform: scale(0.7) translate(-30%, -60%);
        }
      `}</style>
    </>
  );
};
