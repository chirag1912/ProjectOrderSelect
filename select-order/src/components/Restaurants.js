import React from "react";

function Restaurant(props) {
  const { dishData, restaurantChangeHandler, setStep, step } = props;

  //dishData--> has all the filtered Data, based upon the meal selection user has selected;
  const availableRestaurant = ['Select'];
  dishData.forEach(dish => {
    if (!(availableRestaurant.includes(dish.restaurant))) {
      availableRestaurant.push(dish.restaurant)               //Add the restaurant only when the restaurant is not already there;
    }
  })
  // console.log("availableRestaurunt --->>>", availableRestaurant);
  // console.log("dishData --->>>", dishData)

  // const getOption = () => {
  //   let up = [];
  //   for( let i = 0; i< availableRestaurant.length; i++ ) {
  //     up.push(<option>{availableRestaurant[i]}</option>)
  // }
  // return up;
  // }

  return (
    <>
      <br />
      <br />
      <h1 className="text-warning">Select a Restaurant</h1>
      <form className="container col-12">
        <div className="form-group">
          <label htmlFor="restaurant1">
            Select Restaurant
            </label>
          <select className="form-control" id="restaurant1" name="resto" onChange={ (e) => restaurantChangeHandler(e.target.value) } >
            {availableRestaurant.map((resturant, index) => <option value={resturant}  key={`restaurant-${index}`}  >{resturant}</option>)}
            {/* { getOption() } */}
          </select>
        </div>


      </form>
      <div className="next-prev" >
            {step != 1 ? <button type="button" className="btn btn-default btn-info" onClick={() => { setStep(step - 1) }}>Previous</button> : null}
      <span className="col-8"></span>
      <button type="button" className="btn btn-default btn-info" onClick={() => { setStep(step + 1) }} >Next</button>
      </div>
    </>
  );
}

export default Restaurant;
