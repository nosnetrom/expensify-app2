import { createStore } from 'redux';

// Here we destructure a data object being passed in
const add = ({ a, b }, c) => {
  return a + b + c;
};
console.log(add({ a: 2, b: 3 }, 4));

// Action generator: a function that returns an action object
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy:
//     typeof payload.incrementBy === 'number' ? payload.incrementBy : 1,
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count,
});

const resetCount = () => ({
  type: 'RESET',
});

// ACTION REDUCERS
//  -  Are pure functions, not referring to anything outside of its inputs
//  -  NEVER change state or action, instead just returning a value
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// store.subscribe runs every time the store changes
// unsubscribing is the return value from subscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Redux Actions = object that gets sent to the store
// store.dispatch() sends the object to the store
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 })); // Action generator in use

store.dispatch(incrementCount());

// unsubscribe();
// no more console.logs, but the state still changes from here on

store.dispatch(resetCount({}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 100 }));
