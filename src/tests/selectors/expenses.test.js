import selectExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [{
    id: '1',
    description: 'gum',
    amount: 0,
    note: '',
    createdAt: 0
},
{
    id: '2',
    description: 'rent',
    amount: 195,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'credit card',
    ntoe: '',
    amount: 10950,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('select expense', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('select expense with start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('select expense with end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('select expense with sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('select expense with sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});