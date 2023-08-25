import React, { useState } from "react";
import "./App.css";
import Couters from "./components/Couters";
import Navbar from "./components/Navbar";

import Movie from "./components/Movie";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Dashboard from "./components/admin/Dashboard";
import Post from "./components/admin/Post";
import Update from "./components/admin/Update";
import NotFound from "./components/NotFound";
import { MovieForm } from "./components/MovieForm";
import LoginForm from "./components/LoginForm";
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

      <div className="container">
        <Routes>
          <Route
            path="counters"
            element={
              <Couters
                counters={counters}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
              />
            }
          />
          <Route path="movies" element={<Movie />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id?" element={<ProductDetail />} />
          <Route path="/admin" Component={Dashboard}>
            <Route path="posts" Component={Post} />
            <Route path="admin/update" Component={Update} />
          </Route>
          <Route path="*" Component={NotFound}/>
          <Route path="movie-form/:id" Component={MovieForm}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
