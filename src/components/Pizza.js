import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "react-bootstrap/button";
import * as yup from "yup";

const initialForm = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  olives: false,
  special: "",
};

const Pizza = (props) => {
  const formSchema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters"),
    size: yup.string().required(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    olives: yup.boolean(),
    special: yup.string(),
  });

  const [error, setError] = useState({
    name: "",
    accepted: "",
  });

  const [disabled, setDisabled] = useState(true);
  const { orderSubmit } = props;
  const [form, setForm] = useState(initialForm);

  const formValidate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then(() => {
        setError({ ...error, [e.target.name]: "" });
      })
      .catch((error) => {
        setError({ ...error, [e.target.name]: error.errors[0] });
      });
  };
  const formChange = (e) => {
    formValidate(e);
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    orderSubmit(form);
    setForm(initialForm);
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setDisabled(!valid);
    });
  }, [form]);

  return (
    <>
      <h1>Build Your Own Pizza</h1>
      <form onSubmit={submitForm}>
        <div className="name-div">
          <label>Enter Your Name</label>
          <input
            onChange={formChange}
            type="text"
            name="name"
            id="name-input"
            value={form.name}
          ></input>
        </div>
        <label>
          Size
          <select onChange={formChange} name="size" id="size-dropdown">
            <option>--Select One--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
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
            name="special"
            id="special-text"
          ></input>
        </div>
        <Button type="submit" disabled={disabled} id="order-button">
          Add to Order
        </Button>
      </form>
      <p>{error.name}</p>
      <p>{error.accepted}</p>
    </>
  );
};
export default Pizza;
