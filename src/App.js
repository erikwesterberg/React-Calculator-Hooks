import React from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";

const initialExpenses = [
  {id:1, charge: "Rent", amount: 1600},
  {id:2, charge: "Car payment", amount: 600},
  {id:3, charge: "Forest taxes", amount: 800}
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
