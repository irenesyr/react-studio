import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import {BakeryItem} from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [counter, setCounter] = useState(0);
  const [food, setFood] = useState([]);

  function handleClick(){
    setCounter(counter+1);
  }

  function handleCount(name, val){
    setCounter(counter + val);
    if (!food.includes(name)){
      setFood(old => [...old, name]);
    }
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}


      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addCounter={handleCount}/> // replace with BakeryItem component
      ))}

      <div>
      <h2>Total Price: {counter}</h2>
        <h2>Cart</h2>
        {food.map((item) => 
        <li>{item}</li>)}
      </div>
    </div>
  );
}

export default App;
