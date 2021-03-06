import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  let emptyText = <h2 className="expenses-list__fallback">There are no expenses.</h2>;

  if (props.data.length === 0) {
    return emptyText;
  }

  return (
    <ul className="expenses-list">
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
