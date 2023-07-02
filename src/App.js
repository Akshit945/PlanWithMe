import React, { useState } from "react";

// import data and tours
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  // intialise tours with data
  const [tours, setTours] = useState(data);
  //tours is an array of object(data=tours)
  //console.log(tours);

  //EXAMPLE CODE HERE FOR FILTER
  //   const ages = [32, 33, 16, 40];
  // const result = ages.filter(checkAdult);
  // function checkAdult(age) {
  //   return age >= 18;
  // }

  //  removeTour
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {/* data aur function sent as prop */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
