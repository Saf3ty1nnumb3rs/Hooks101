import React, { useState, useEffect } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(prevCount => prevCount + 1);
  }
  const decrement = () => {
    if (count > 0) return setCount(prevCount => prevCount - 1);
  }
  const resetCount = () => {
    return setCount(0);
  }

  useEffect(() => {
    document.title = `You've clicked ${count} times`;
  }, [count])

  const disabled = count === 0 ? 'disabled' : '';
  return (
    <>
      <button className={`btn small danger ${disabled}`} onClick={decrement} disabled={count === 0}>-</button>
      <button className="btn small success" onClick={increment}>+</button>
      <button className="btn standard primary" onClick={resetCount}>RESET</button>
      <h1>The count value is {count}</h1>
    </>
  );
};

export default Counter;