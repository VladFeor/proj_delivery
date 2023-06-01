import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Смак та швидкість <br/> разом – наша доставка їжі!</h2>
      <p>
      Харчування без зусиль – наше гасло, яке втілюємо в нашій службі доставки їжі. Ми пропонуємо детально продуману та ефективну систему,
       щоб забезпечити вам вишукані страви без зайвого напруження.
      </p>
    </section>
  );
};

export default MealsSummary;
