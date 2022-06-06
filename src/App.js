import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { 
    id: "e1",
    title: "Education", 
    amount: 600, 
    date: new Date(2021, 8, 14) 
  },
  { 
    id: "e2",
    title: "Health", 
    amount: 1000, 
    date: new Date(2022, 4, 22) 
  },
  { 
    id: "e3",
    title: "Summer", 
    amount: 200, 
    date: new Date(2020, 7, 7) 
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addNewExpense = (newExpanse) => {
    setExpenses( (prevExpenses) => {
      return [newExpanse, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense getNewExpense={addNewExpense} />
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
