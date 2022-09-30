import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, DECNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber   );
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <h1>Increment/Decrement Counter</h1>
        <h2>Using React and Redux</h2>

        <div className="inn_div">
          <button
            className="quentity-minus"
            title="decrement"
            onClick={() => dispatch(DECNumber())}
          >
            <span className="plus">-</span>
          </button>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
          />
          <button
            className="quentity-plus"
            title="increment"
            onClick={() => dispatch(incNumber())}
          >
            <span className="plus">+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;