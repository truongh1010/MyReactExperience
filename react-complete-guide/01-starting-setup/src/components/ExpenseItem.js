// this component represent a single expense item
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Feb 2nd 2023</div>
      <div className="expense-item__description">
        <h2>Food</h2>
        <div className="expense-item__price">$14.99</div>
      </div>
    </div>
  );
}

// need to export it, then import it where we need to use it
export default ExpenseItem;
