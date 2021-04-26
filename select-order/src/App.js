import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Restaurant from "./components/Restaurants";
import Dish from "./components/DishServings";
import SelectMeal from "./components/SelectMeal";
import Data from "./Data.json";
import Preview from "./components/Preview";

function App() {
  const [meal, setMeal] = useState("breakfast");
  const [people, setPeople] = useState(1);
  const [step, setStep] = useState(1);
  const [filterdDishes, setFilteredDishes] = React.useState();
  const [selectedRestaurant, setSeletecRestaurant] = React.useState(null);
  const [finalOrder, setFinalOrder] = React.useState([]);

  useEffect(() => {
    setMealRestaurunt("breakfast");
  }, []);

  if (!meal) return null;

  // const abc=()=><Restaurant/>

  // function mealsetting() {
  //   return setMeal();
  // }

  // function peoplesetting() {
  //   return setPeople();
  // }

  const setMealRestaurunt = (meal) => {
    let updatedDishData = [];
    Data.dishes.forEach((dish) => {
      if (dish.availableMeals.includes(meal)) {
        updatedDishData.push(dish); //JUst array variable used to push the data; and update for the filteredDishes variable;
      }
    });
    setFilteredDishes(updatedDishData); //FilteredDishes is an array state which now has all the updated, Meals which user has selected;

    console.log(
      "Dishes with selected Meal(filtered Dishes)--->",
      updatedDishData
    );
    setMeal(meal);
  };

  const restaurantChangeHandler = (selectedRestaurant) => {
    //One can directly pass the setSelectedRestaurant to the Restaurant.js;
    setSeletecRestaurant(selectedRestaurant); //To set the selectedRestaurant method;
  };

  const orderDataHandler = (orderData) => {
    setFinalOrder(orderData);
  };

  const getSteppedComponent = () => {
    switch (step) {
      case 1:
        return (
          <SelectMeal
            setRestaurantMeal={setMealRestaurunt}
            setPeople={setPeople}
            setStep={setStep}
            step={step}
          />
        );
      case 2:
        return (
          <Restaurant
            dishData={filterdDishes}
            restaurantChangeHandler={restaurantChangeHandler}
            setStep={setStep}
            step={step}
          />
        );
      case 3:
        return (
          <Dish
            dishData={filterdDishes}
            selectedRestaurant={selectedRestaurant}
            setStep={setStep}
            step={step}
            orderDataHandler={orderDataHandler}
            finalOrder={finalOrder}
          />
        );
      case 4:
        return (
          <Preview
            meal={meal}     
            people={people}
            selectedRestaurant={selectedRestaurant}
            finalOrder={finalOrder}
          />
        );
      default:
        return <div>Default Page Shown</div>
    }
  };

  // console.log("STATE MEAL --->>>", meal)
  // console.log("STATE SELECTED RESTAURANT --->>", selectedRestaurant);
  console.log("STATE FINAL ORDER --->>", finalOrder);

  return (
    <div className="App container col-6">
      <div className="tabs">
        <div
          className="tab"
          onClick={() => {
            setStep(1);
          }}
        >
          {" "}
          STEP 1{" "}
        </div>
        <div
          className="tab"
          onClick={() => {
            setStep(2); //Seeting the State of Step as selected by user;
          }}
        >
          STEP 2{" "}
        </div>
        <div
          className="tab"
          onClick={() => {
            setStep(3);
          }}
        >
          STEP 3{" "}
        </div>
        <div
          className="tab"
          onClick={() => {
            setStep(4);
          }}
        >
          STEP 4{" "}
        </div>
      </div>
      {/* Calling Switch function on render of this main function */}
      {getSteppedComponent()}
    </div>
  );
}

export default App;
