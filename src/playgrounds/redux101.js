import { createStore } from 'redux';

const increament = ({ increamentBy = 1 } = {}) => ({
    type: 'INCREAMENT',
    increamentBy
});

const decreament = ({ decreamentBy = 1 } = {}) => ({
    type: 'DECREAMENT',
    decreamentBy
});

const set = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET'
});
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return {
                count: state.count + action.increamentBy
            };
        case 'DECREAMENT':
            return {
                count: state.count - action.decreamentBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

const storeSubscriber = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increament({ increamentBy: 5 }));

store.dispatch(increament());

store.dispatch(reset());

store.dispatch(decreament({ decreamentBy: 15 }));

store.dispatch(decreament());

store.dispatch(set({ count: 50 }));