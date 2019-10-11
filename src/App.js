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
  // alert
  const [alert, setAlert] = useState({ show: false });
  //functionality
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // handle amount 
  const handleAmount = e => {
    setAmount(e.target.value);
  };
 // handle alert
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text})
    setTimeout(() =>{
      setAlert({show:false})
    },3000)
  }
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (charge != "" && amount > 0) {
      const singleExpense = {
        id: uuid(),
        charge,
        amount
      };
      setExpenses([...expenses, singleExpense]);
      handleAlert({type:"success", text: "item added"})
      setCharge("");
      setAmount("");
    } else {
      //handle alert called
      handleAlert({type:"danger", text: `Charge and amount cant be empty values`})
    }
  };

  // edit 
  const [edit, setEdit] = useState(false)

  // edit item
  const [id, setId] = useState(0)
  // clear all items
  const clearItems = () => {
   setExpenses([]);
   handleAlert({type: "danger", text: "All items deleted"})
  }

  //handel delete by id value
  const handleDelete = (id) => {
    let tempExpenes = expenses.filter(item => item.id !== id); 
    setExpenses(tempExpenes);
    handleAlert({type: "danger", text: "Item deleted"})
  }

   //handel edit by id value
   const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id)

  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}/>
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
