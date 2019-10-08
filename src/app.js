import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouters from './routers/AppRouters'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { editTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 5000 }));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'jamed bill', amount: 195000 }));
// store.dispatch(editTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(editTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));