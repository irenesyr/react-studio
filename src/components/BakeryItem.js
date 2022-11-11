// TODO: create a component that displays a single bakery item
// import bakeryData from "./data.js";

export function BakeryItem({item, addCounter}) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img 
            src={item.image}
            />
            <p>
                {item.description}
            </p>
            <button onClick={() => addCounter(item.name, item.price)}>Click me!</button>
            </div>

    );
  }
  