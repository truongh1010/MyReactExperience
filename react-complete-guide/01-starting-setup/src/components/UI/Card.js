import "./Card.css";

// normally, we can't wrap other components inside a customed component
// with React, we can do that
// props.children -> built-in props allows you to do that
// this children props will the content between the closing and closing tags of customed component
function Card(props) {
  // get className from ExpenseItem and add it to card className
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// this allows us to extract some duplicate code
