import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)} грн`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      firm: props.firm,
      imgUrl: props.imgUrl,
    });
  };
  return (
    <li className={classes.meal} key={props.id}>
      <div style={{display: "flex"}} className="li__food">
        <img  className="photo__food" src={props.imgUrl} alt="none"/>
        <div>
          <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.description}>Фирма: {props.firm}</div>
        <div className={classes.price}>{price}</div>
        </div>
        
        
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
