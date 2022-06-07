import { useState } from "react";

import Card from "../UI/Card";
import ExpansesFilter from "../Expenses/FilterExpanses";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredDate, setFilteredDate] = useState("2020");

  const saveDate = (newDate) => {
    setFilteredDate(newDate);
  };

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredDate
  );

  return (
    <li>
      <Card className="expenses">
        <ExpansesFilter selected={filteredDate} getNewYear={saveDate} />

        <ExpensesChart data={filteredExpenses} />

        <ExpensesList data={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
