import React from 'react';

import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpanseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }

        props.getNewExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm newExpense={saveExpanseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;