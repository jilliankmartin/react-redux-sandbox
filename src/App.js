import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter } from './store/actions'

function App() {
  const count = useSelector(state => state.counter)
  const name = useSelector(state => state.name)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi {name}</h1>
        <p>You have clicked:</p>
        <h1>{count} Times!!</h1>
        <button onClick={() => {dispatch(incrementCounter())}}>Click!</button>
      </header>
    </div>
  );
}

export default App;
