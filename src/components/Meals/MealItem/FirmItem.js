import classes from "./MealItem.module.css";

const FirmItem = (props) => {

  return (
    <li className={classes.meal} >
        <button>{props.firmName}</button>
    </li>
  );
};

export default FirmItem;
