import { createStore, combineReducers } from 'redux';
import uuid from "uuid";

//Add Expense
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: "ADD_EXPENSE",
        expenses: {
            description,
            note,
            amount,
            createdAt,
            id: uuid()
        }
    });

//remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//edit text filter
const editTextFilter = (text = '') => ({
    type: 'EDIT_TEXT_FILTER',
    text
});

//sort by date filter
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//sort by amount filter
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
//expenses reducer

const expensesReducerDefaultValue = [];

const expensesReducer = (state = expensesReducerDefaultValue, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

//filter reducer

const filterReducerDefaultValue = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultValue, action) => {
    switch (action.type) {
        case 'EDIT_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


//add expense dispathcer
const itemOne = store.dispatch(addExpense({
    description: 'Fish',
    note: 'This is a test for note',
    amount: 300,
    createdAt: 1000
}));
const itemTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 100,
    createdAt: 500
}));

// //remove expense dispatcher
// store.dispatch(removeExpense({ id: itemOne.expenses.id }));
// store.dispatch(editExpense(itemTwo.expenses.id, { amount: 500 }))

// //edit text element in filters
// store.dispatch(editTextFilter('s'));
// store.dispatch(editTextFilter());

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'kjsdfjkshdf',
        description: 'This is for my mom.',
        note: 'This is last money for this product.',
        amount: 54500
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};