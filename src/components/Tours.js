import Card from "./Card";

//tours ,removeTour is recieved from app.js
function Tours({ tours, removeTour }) {
  //...tours is ???
  console.log(...tours);
  return (
    <div className="container">
      <div>
        <h2 className="title"> Plan With ME</h2>
      </div>

      {/* cards */}
      <div className="cards">
        {/* we are using maps to avoid writing card multiple times (tours is array in data.js) */}
        {/* function and data is again sent as prop */}
        {/* tour is argument can be seen as name of elemet in array name tour */}
        {/* tours==data which is an array  */}
        {/* always pass key whenever we use map function */}
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
