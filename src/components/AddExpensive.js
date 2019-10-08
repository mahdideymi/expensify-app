import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { addExpense } from '../actions/expenses'

const AddExpensiveApp = (props) => (
    <div>
        <h2>Expense Form</h2>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensiveApp);