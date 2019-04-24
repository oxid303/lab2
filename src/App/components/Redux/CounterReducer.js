const increment = 'increment';
const decrement = 'decrement';
const resetCounter = 'reset-counter';

export const incrementAC = () => ({ type: increment });
export const decrementAC = () => ({ type: decrement });
export const resetCounterAC = () => ({type: resetCounter});

let initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case increment:
      state.counter += 1;
      break;

    case decrement:
      state.counter -= 1;
      break;

    case resetCounter:
      state.counter = 0;
      break;

    default:
      break;
  };

  return state;
}

export default counterReducer;
