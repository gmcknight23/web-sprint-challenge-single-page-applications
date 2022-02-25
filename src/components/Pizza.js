import React, { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";

import Button from "react-bootstrap/button";

const Pizza = () => {
  const [form, setForm] = useState({
    name: "",
    size: "",
    Pepperoni: Boolean,
    Sausage: Boolean,
    Mushrooms: Boolean,
    Olives: Boolean,
    special: "",
  });

  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <h1>Build Your Own Pizza</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>Enter Your Name</label>
          <input
            onChange={formChange}
            type="text"
            name="name"
            id="name-input"
            value={form.name}
          ></input>
        </div>
        <label>Choice of Size</label>
        <input
          onChange={formChange}
          type="dropdown"
          name="size"
          id="size-dropdown"
        ></input>
        {/* <div>
          <label>Choice of Sauce</label>

          <input onChange={formChange} type="radio"></input>
        </div> */}
        <div>
          <label>Add Toppings</label>
          <label>Pepperoni</label>
          <input onChange={formChange} type="checkbox" name="pepperoni"></input>
          <label>Sausage</label>
          <input onChange={formChange} type="checkbox" name="sausage"></input>
          <label>Mushrooms</label>
          <input onChange={formChange} type="checkbox" name="mushrooms"></input>
          <label>Olives</label>
          <input onChange={formChange} type="checkbox" name="olives"></input>
        </div>
        <div>
          <label>Special Instructions</label>
          <input
            onChange={formChange}
            type="text"
            name="instructions"
            id="special-text"
          ></input>
        </div>
        <Button type="submit" id="order-button">
          Add to Order
        </Button>
      </form>
    </>
  );
};
export default Pizza;
