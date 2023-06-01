import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Бургер",
    description: "Класичний бургер",
    price: 120.50,
    firm: 'McDonald’s',
    imgUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80  ',
  },
  {
    id: "m2",
    name: "Соковита курка",
    description: "Спеціальний рецепт грусткої курки",
    price: 120,
    firm: 'McDonald’s',
    imgUrl: 'https://images.unsplash.com/photo-1626082910497-b2987c968923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80',
  },
  {
    id: "m3",
    name: "Бургер BBQ",
    description: "Американський стандарт",
    price: 99.99,
    firm: 'Mac',
    imgUrl: 'https://images.unsplash.com/photo-1554998171-7e599bc95ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: "m4",
    name: "Зелений салат",
    description: "Корисний і..зелений",
    price: 90,
    firm: 'GreenFood',
    imgUrl: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: "m5",
    name: "Овочевий салат",
    description: "Корисний і..овочевий",
    price: 100,
    firm: 'GreenFood',
    imgUrl: 'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=977&q=80',
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      firm = {meal.firm}
      imgUrl = {meal.imgUrl}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
