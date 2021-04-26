import React from "react";
import "./DishServing.css";

function Dishserving(props) {
  const { dishData, selectedRestaurant, setStep, step, orderDataHandler, finalOrder } = props;

  console.log("finalOrder -->>", finalOrder)
  let availableDish = [];

  dishData.forEach(dish => {                    //DishData has all the data, while orderData is Dynamic;
    if (dish.restaurant === selectedRestaurant) {
      availableDish.push(dish.name)
    }
  })          //Available dish has all the data of the food list available for that restaurant, for the meal selected;
  //Not just currently available;
  
  const [orderData, setOrderData] = React.useState([...finalOrder]);


  React.useEffect(() => {
    if (finalOrder.length) {
      setOrderData([...finalOrder])     //FInal Order upated at time of Clicking "Next" button, with orderData;

    } else {
      setOrderData([{ dishName: availableDish[0], noofServing: 1 }])    //orderData will be updated, with dishHandler; if not already present;
    }
  }, [])

  //CReating Object of Order Data with dishName:[0] and Servings:1;
  //Available dish is for us(Developer) to be shown to the user; 

  const dishChangeHandler = (value, orderIndex) => {
    let updatedOrderData = [];
    orderData.forEach((obj, index) => {
      if (orderIndex == index) {
        updatedOrderData.push({ ...obj, dishName: value })          //It just needs to go in once, but has to check if the index of the orderData matches;
      } else {
        updatedOrderData.push(obj)
      }
    })
    setOrderData(updatedOrderData);
  }


  const noofServingHandler = (value, orderIndex) => {
    let updatedOrderData = [];
    orderData.forEach((obj, index) => {                 ///Comparing Index to check if the orderData is in the index already, if not, then add the complete obj with dishName and Index;
      if (orderIndex == index) {
        updatedOrderData.push({ ...obj, noofServing: parseInt(value) })
      } else {
        updatedOrderData.push(obj)
      }
    })
                     //Both Serving handler and dishChange Handler are used to updateOrderData, which has the dishName and No of Servings;
    setOrderData(updatedOrderData);
  }

  //FUNC Being Called from return Main Func();
  const getDishInputs = () => {
    
    return orderData.map((obj, orderIndex) => {
      let selectedDish = orderData.map(obj => obj.dishName)     //SelectedDish will be a list of all the orderData.dishName selected already;
      //Making a list of dishes selected in each of the available dishes;

      //SelectDish and Available Dish only are the DishName Arrays; to be compared;

      let dishOption = [obj.dishName]                         //dishOption used for dropdown UI visibility; is empty till now;
      console.log("availableDish --->>", availableDish)
      console.log("Selected Dish --->>", selectedDish)
      availableDish.forEach(obj => {
        if (!(selectedDish.includes(obj))) {
          dishOption.push(obj)                          //dishOption is filled here;
        }
      })
      console.log("noofServing Dish --->>", obj.noofServing)  //Just getting the no of serving selected by the user;

      return (
        <div className="inputFormGroup">
          <div className="form-group">
            <label htmlFor={`${orderIndex}-menu1-${obj.dishName}`} className="text-success">
              Please Select a Dish
            </label>
            <br></br>
            <select className="form-control" name="menu" id={`${orderIndex}-menu1`} onChange={ (e) => dishChangeHandler( e.target.value, orderIndex )  } >
              {dishOption.map((dish,index) => <option key={`${index}-menu1`} >{dish}</option>)}
              {/* <option key={`dish-${orderIndex}`} >{obj.dishName}</option> */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor={`${orderIndex}-no-of-serving-${obj.dishName}`} className="text-success">
              Enter Number of Servings
            </label>
            <br></br>
            <select className="form-control" name="menu" id={`serving-${orderIndex}`} onChange={(e) => noofServingHandler(e.target.value, orderIndex)}  >
              <option key={`serving-1`} value={1}>1</option>
              <option key={`serving-2`} value={2}>2</option>
              <option key={`serving-3`} value={3}>3</option>
              <option key={`serving-4`} value={4}>4</option>
              <option key={`serving-5`} value={5}>5</option>
            </select>

          </div>
        </div>
      )
    })
  }
  //END of Func Call from the Main FUnction();


  const addOrder = () => {
    let filterDish = []
    let selectedDish = orderData.map(obj => obj.dishName)
    // console.log("selectedDish -->>", selectedDish)
    availableDish.forEach(obj => {
      if (!selectedDish.includes(obj)) {      //OrderData being Dynamic, and so Slected DIsh, availableDIsh will have all the dish Names;
        filterDish.push(obj)
      }
    })

    setOrderData([...orderData, { dishName: filterDish[0], noofServing: 1 }])

  }


  return (
    <>
      <form>

        <h1>Select Dish and Number of Servings</h1>
        <br />
        <br />
        {getDishInputs()}
        <br />
        {availableDish.length != orderData.length ? <button className="symbol" onClick={(e) => { e.preventDefault(); addOrder() }} >+</button> : null}
        <br />


      </form>
      <div className="next-prev" >
        {step != 1 ? <button type="button" className="btn btn-default btn-info" onClick={() => { setStep(step - 1) }}>Previous</button> : null}
        <span className="col-8"></span>
        <button type="button" className="btn btn-default btn-info" onClick={() => { setStep(step + 1); orderDataHandler(orderData) }}  >Next</button>
      </div>
    </>
  );
}

export default Dishserving;
