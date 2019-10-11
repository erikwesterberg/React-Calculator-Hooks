import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "Rent", amount: 1600 },
  { id: uuid(), charge: "Car payment", amount: 600 },
  { id: uuid(), charge: "Forest taxes", amount: 800 }
];

const App = () => {
  // State values
  //, all expense, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //Singe expense
  const [charge, setCharge] = useState("");
  //Singe amount
  const [amount, setAmount] = useState("");
  //functionality
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  const handleAmount = e => {
    setAmount(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (charge != "" && amount > 0) {
      const singleExpense = {
        id:uuid(),
        charge,
        amount
      }
      setExpenses([
        ...expenses,
        singleExpense
      ])
      setCharge("");
      setAmount("");
    } else {
      //handle alert called
    }
  };
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
};

export default App;
