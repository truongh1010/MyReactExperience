// this component represent a single expense item
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 13);
  const expenseTitle = "Food";
  const expenseAmount = 14.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

// need to export it, then import it where we need to use it
export default ExpenseItem;
