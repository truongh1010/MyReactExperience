//  expense form component
import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, // copy usesInput
    //   enteredTitle: event.target.value, // then override enteredTitle, This makes sure other attributes aren't thrown away
    //   // enteredAmount: "",
    //   // enteredDate: "",
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, // copy usesInput
    //   enteredAmount: event.target.value, // then override enteredTitle, This makes sure other attributes aren't thrown away
    // });

    // React schedules state updates
    // if we schedule a lot of states at the same time, we could be depending on
    // outdated or incorrect snapshots if we used the above approach

    // this approach guarentees that the state snaoshot will always be the latest snapshot
    // setUserInput((prevState) => {
    //   // copy old state and override the value
    //   return {...prevState, enteredAmount: event.target.value};
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, // copy usesInput
    //   enteredDate: event.target.value, // then override enteredTitle, This makes sure other attributes aren't thrown away
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent the page from reloading when click on submit
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // passing data to NewExpense
    props.onSaveExpenseData(expenseData);
    // clear the form after submit the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
