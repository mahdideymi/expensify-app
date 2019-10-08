import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('remove Expense', () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test('edit Expense', () => {
    const action = editExpense('123abc', { note: 'The new note.' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {
            note: 'The new note.'
        }
    });
});

test('add Expense with provided data', () => {
    const expenseData = {
        description: 'test dicribe',
        amount: 1000,
        createdAt: 500,
        note: 'test note'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('add Expense with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});