import React, { useState } from "react";
import "./App.css";
import Couters from "./components/Couters";
import Navbar from "./components/Navbar";

import Movie from "./components/Movie";
import Todo from "./pages/Todo";
function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (counterId) => {
    const items = counters.filter((counter) => counter.id !== counterId);
    setCounters(items);
  };

  const handleIncrement = (counter) => {
    const items = [...counters];
    const index = items.indexOf(counter);
    items[index] = { ...counter };
    items[index].value++;
    setCounters(items);
  };

  const handleDecrement = (counter) => {
    const items = [...counters];
    const index = items.indexOf(counter);
    items[index] = { ...counter };
    items[index].value--;
    setCounters(items);
  };

  const handleReset = () => {
    const items = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(items);
  };
  return (
    <React.Fragment>
      <Navbar totalCounter={counters.filter((c) => c.value !== 0).length} />
      <main className="container">
        {/* <Couters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        /> */}
        <Movie />
      </main>
    </React.Fragment>
  );
}

export default App;
