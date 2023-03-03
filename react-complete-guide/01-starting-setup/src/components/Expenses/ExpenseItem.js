// this component represent a single expense item
import React from "react";
// useState function provided by React lib,
// this function allows us to define values as state,
// where changes to these values should reflect in the component function
// being called again

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// react function takes one parameter as ann object
// this object will hold all the values we get for the attributes on custom element
function ExpenseItem(props) {
  // useState is a react hook
  // it returns an array, where first element is the value itself,
  // and the second element is the update function

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

// need to export it, then import it where we need to use it
export default ExpenseItem;
