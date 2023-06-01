import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React, { useState } from "react";

const DUMMY_MEALS = [
  {
    id:'f1',
    firmName:'McDonald’s',
    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
    items:[
      {
        id: "m1",
        name: "Бургер",
        description: "Класичний бургер",
        price: 120.50,
        imgUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80  ',
      },
      {
        id: "m2",
        name: "Соковита курка",
        description: "Спеціальний рецепт грусткої курки",
        price: 120,
        imgUrl: 'https://images.unsplash.com/photo-1626082910497-b2987c968923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80',
      },
      {
        id: "m3",
        name: "Бургер BBQ",
        description: "Американський стандарт",
        price: 99.99,
        imgUrl: 'https://images.unsplash.com/photo-1554998171-7e599bc95ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      },
    ]
  },
  {
    id:'f2',
    firmName:'GreenFood',
    url:'https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png',
    items:[{
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
    },]
  }
  
];
let  mealsList ;
const AvailableMeals = () => {
  const [isChoosed, setisChoosed] = useState(false);

   const handleClick = (firmName) => {
      const desiredFirm = DUMMY_MEALS.find((firm) => firm.firmName === firmName);
      const simplarray = desiredFirm.items
       mealsList = simplarray.map((meal) => (
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
        setisChoosed(true)
    };
  return (
    <section className={classes.meals}>
    {isChoosed
      ? <Card>
        <div><button onClick={() => setisChoosed(false)}>Закрити</button></div>
         <ul >{mealsList}</ul> 
         </Card>
      : <Card > 
        <div style={{display: "flex"}} >
          {DUMMY_MEALS.map((firm) => (
            <div   key={firm.id} onClick={() => handleClick(firm.firmName)}>
              <img style={{border: '1px solid #14141427'}} src={firm.url} alt="error"/>
             
            </div>
          ))}
        </div> 
        </Card>
    }
    </section>
  );

};
export default AvailableMeals;
