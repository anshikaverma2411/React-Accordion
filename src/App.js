import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion_component";
import RandomColor from "./components/random-color-genetator";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random Color componenet */}
      {/* <RandomColor /> */}

      {/* Star-Rating component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
