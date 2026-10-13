import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from './redux/reducers/actions';

const App = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter.value);

  // Приклад для фетча
  const fetchProducts = () => {
    dispatch(startedFetching());
    try {
      const response await ...;
      dispatch(successedFetching());
    } catch (error) {
      dispatch(rejectedFetching());
    }
  }

  return (
    <div>
      <h2>Моє значення: {counterValue}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment By Amount</button>
    </div>
  );
};

export default App;