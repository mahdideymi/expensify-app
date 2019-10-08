import moment from 'moment'
import {
    setStartDate,
    setEndDate,
    editTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('edit text filter', () => {
    const action = editTextFilter('bill');
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: 'bill'
    });
});

test('edit text filter with default value', () => {
    const action = editTextFilter();
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: ''
    });
});

test('sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});