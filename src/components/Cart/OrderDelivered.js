import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <Fragment>
      <section>
        <h2>Дякую за ваше замовлення</h2>
        <p>Чекайте нашого дзвінка </p>
        <p>
          Остримайте <b>10%</b> знижки  на наступне замовлення с промокодом:
          <b>THANKYOU10.</b>
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderDelivered;
