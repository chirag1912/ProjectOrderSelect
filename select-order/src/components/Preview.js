import React from "react";
import "./DishServing.css";

function Preview(props) {
  const { meal, people, selectedRestaurant, finalOrder } = props;
  console.log("STATE FINAL ORDER --->>", finalOrder);

  return (
    <>
      <h1 className="text-primary">Preview Your Order</h1>
      <br />
      <div className="container">
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <td>Meal</td>
              <td>{meal}</td>
            </tr>
            <tr>
              <td>No of People</td>
              <td>{people}</td>
            </tr>
            <tr>
              <td>Restaurant</td>
              <td>{selectedRestaurant}</td>
            </tr>
            <tr>
              <td>Dishes</td>
              <td>
                {finalOrder.map((dishName,index) => (
                  <div key={`dish-${index}`}>
                    {dishName.dishName} : {dishName.noofServing}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Preview;
