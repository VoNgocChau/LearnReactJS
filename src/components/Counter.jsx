import React from "react";

const Counter = (props) => {
  


  return (
    <div>
      <span className="badge bg-primary">{props.counter.value}</span>
      <button className="bg-secondary rounded-3 mx-2" onClick={() => props.onIncrement(props.counter)}>
        +
      </button>
      <button disabled={props.counter.value === 0} className="bg-secondary rounded-3 mx-2" onClick={() => props.onDecrement(props.counter)} >
        -
      </button>
      <button className="btn btn-danger btn-sm m2" onClick={() => props.onDelete(props.counter.id)}>X</button>
    </div>
  );
};

export default Counter;
