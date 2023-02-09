// this component represent a single expense item
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// react function takes one parameter as ann object
// this object will hold all the values we get for the attributes on custom element
function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 13);
  // const expenseTitle = "Food";
  // const expenseAmount = 14.99;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

// need to export it, then import it where we need to use it
export default ExpenseItem;
