import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import trips from "./trips"

function App() {

  let tripsItem = trips.map(trip => {
    return(
      <Card
        key = {trip.id}
        item = {trip}
    />
    )
  })
  return (
    <div className="App">
      <Header />
      {tripsItem}
    </div>
  );
}

export default App;
