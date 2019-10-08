//edit text filter
export const editTextFilter = (text = '') => ({
    type: 'EDIT_TEXT_FILTER',
    text
});

//sort by date filter
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//sort by amount filter
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//set start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//set end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});