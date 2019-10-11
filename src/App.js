import React from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import uuid from "uuid/v4";

const initialExpenses = [
  {id: uuid(), charge: "Rent", amount: 1600},
  {id: uuid(), charge: "Car payment", amount: 600},
  {id: uuid(), charge: "Forest taxes", amount: 800}
]
console.log(initialExpenses)
const App = () => {
  return (
    <>
    <Alert />
    <ExpenseForm />
    <ExpenseList />
    <ExpenseItem />
    </>
  );
};

export default App;
