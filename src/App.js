import React, { useState } from "react";
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

const App = () => {
  const [ expenses, setExpenses ] = useState(initialExpenses)
  return (
    <>
    <Alert />
    <h1>Budget Calculator</h1>
    <main className="App">
    <ExpenseForm />
    <ExpenseList expenses={expenses}/>
    </main>
    <ExpenseItem />
    </>
  );
};

export default App;
