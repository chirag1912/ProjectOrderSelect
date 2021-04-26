import React from 'react';


const SelectMeal = (props) => {
    const { setRestaurantMeal, setPeople, setStep, step} = props;
    return (
        <div>
            <h1 className="text-success">Select Your Meal</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="meal" className="text-success">Please Select a Meal</label>
                    <select className="form-control" name="mealinp" id="meal1" onChange={ (e) => setRestaurantMeal(e.target.value)  }   >
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                {/* {"Meal Selected is:"+meal} */}
                
                

                <div className="form-group">
                    <label htmlFor="people1" className="text-success">Please Enter Number of People</label>
                    
                    <select className="form-control" name="peopleinp" id="people1" onChange={ (e) => setPeople(e.target.value)  }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                {/* {"No of People Selected:"+people}; */}

    

                {/* Unable to set Value pf In People and meal on next or onSelect; */}


                {/* <Restaurant/>
        <Dish/> */}
            </form>
            <div className="next-prev" >
            {step != 1 ? <button type="button" className="btn btn-default btn-info" onClick={() => { setStep(step - 1) }}>Previous</button> : null}
      <span className="col-8"></span>
      <button type="button" className="btn btn-default btn-info" onClick={() => { setStep(step + 1) }} >Next</button>
      </div>
        </div>

    )
}

export default SelectMeal;