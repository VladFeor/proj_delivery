import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const FirmItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <li className={classes.meal} >
        <button>{props.firmName}</button>
    </li>
  );
};

export default FirmItem;
