import React from "react";
import Counter from "./Counter";

const Couters = (props) => {

  return (
    <React.Fragment>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
      {props.counters.map((counter) => (
        <Counter key={counter.id} onDelete={props.onDelete} counter={counter} onIncrement={props.onIncrement}
          onDecrement={props.onDecrement} />
      ))}
    </React.Fragment>
  );
};

export default Couters;
