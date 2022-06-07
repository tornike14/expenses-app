import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [formState, setFormState] = useState(false);

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const toggleForm = (e) => {
        e.preventDefault();

        setFormState(!formState);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.newExpense(expenseData)

        toggleForm(e);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const addNewExpenseButton = <div className="new-expense__actions_2">
                                    <button onClick={toggleForm}>Add New Expense</button>
                                </div>

    if(formState === false) {
        return addNewExpenseButton
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                    </div>

                    <div className="new-expense__control">
                        <label>date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    </div>

                    <div className="new-expense__actions">
                        <button onClick={toggleForm}>Cancel</button>
                    </div>

                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;