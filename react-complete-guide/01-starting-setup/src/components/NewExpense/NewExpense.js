// this NewExpense component renders a form where user can input their expense
import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  );
};

export default NewExpense;
