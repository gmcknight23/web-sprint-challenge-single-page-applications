import React, { useState, useEffect } from "react";

import { Link, useRouteMatch } from "react-router-dom";

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
  return (
    <>
      <h1>Build Your Own Pizza</h1>
      <form>
        <label>Enter Your Name</label>
        <input
          onChange={formChange}
          type="text"
          name="name"
          id="name-input"
          value={form.name}
        ></input>
        <label>Choice of Size</label>
        <input
          onChange={formChange}
          type="dropdown"
          name="size"
          id="size-dropdown"
        ></input>
        <label>Choice of Sauce</label>
        <input onChange={formChange} type="radio"></input>
        <label>Add Toppings</label>
        <input onChange={formChange} type="checkbox"></input>
        <label>Special Instructions</label>
        <input
          onChange={formChange}
          type="text"
          name="instructions"
          id="special-text"
        ></input>
        {/* <Button type="submit" id="order-button">
          Submit Order
        </Button> */}
      </form>
    </>
  );
};
export default Pizza;
