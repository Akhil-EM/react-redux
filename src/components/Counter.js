import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import {ADD_ONE,MINUS_ONE} from '../actions';

const containerStyle = {
  display: "flex",
};

const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

export default function Counter() {
  const count = useSelector(state => state.number);
  const dispatch = useDispatch();

  const increment = ()=>{
     dispatch({type:ADD_ONE});
  }

  const decrement = ()=>{
    dispatch({type:MINUS_ONE});
 }

  return (
    <div>
      <header className="App-header">
        <h1>{count}</h1>
        <div style={containerStyle} >
          <button style={buttonStyle} onClick={increment}>-</button>
          <button type="button" style={buttonStyle} onClick={decrement}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}
