// this component represent a single expense item
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// react function takes one parameter as ann object
// this object will hold all the values we get for the attributes on custom element
function ExpenseItem(props) {
  let title = props.title;

  const clickHandler = () => {
    title = "Updated";
    console.log("clicked!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

// need to export it, then import it where we need to use it
export default ExpenseItem;
