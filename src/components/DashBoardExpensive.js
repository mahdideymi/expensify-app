import React from 'react';
import ExpenseList from './Expenses';
import ExpenseFilterInput from "./ExpenseFilterInput";
const DashBoardExpensiveApp = () => (
    <div>
        <ExpenseFilterInput />
        <ExpenseList />
    </div>
);

export default DashBoardExpensiveApp;