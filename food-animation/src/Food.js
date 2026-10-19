import { useState } from "react";
import   "./Food.css";

function Food() {
    const[pizzaordered,setPizzaOrdered]=useState(false);
    const[burgerordered,setBurgerOrdered]=useState(false);
    const[iceCreamordered,setIceCreamOrdered]=useState(false);
    const [order, setOrder] = useState("");
    const resetOrder = () => {
  setPizzaOrdered(false);
  setBurgerOrdered(false);
  setIceCreamOrdered(false);
  setOrder("");
};
  return (
    <div className="foods">

      <div className="food">
        <h2>🍕 Pizza</h2>
        <p>Cheesy Pizza</p>
        <button onClick={()=> {
        setPizzaOrdered(true);
            setOrder("🍕 Pizza");
            fetch("http://localhost:5000/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    food: "Pizza"
  })
});
        }}
             disabled={pizzaordered}
             >
              {pizzaordered ? "Ordered ✅" : "Order Now"}
            </button>
            {pizzaordered &&<p>Orderde successfully!</p>}
    
      </div>

      <div className="food">
        <h2>🍔 Burger</h2>
        <p>Delicious Burger</p>
        <button onClick={()=> {
            setBurgerOrdered(true);
            setOrder("🍔 Burger");
            fetch("http://localhost:5000/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    food: "Burger"
  })
});
        }}
            disabled={burgerordered}
            >
              {burgerordered ? "Ordered ✅" : "Order Now"}
            </button>
            {burgerordered &&<p>Ordered successfully!</p>}

      </div>

      <div className="food">
        <h2>🍦 Ice Cream</h2>
        <p>Sweet Ice Cream</p>
        <button onClick={()=>{
            setIceCreamOrdered(true);
            setOrder("🍦 Ice Cream");
            fetch("http://localhost:5000/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    food: "Ice Cream"
  })
});
        }}
            disabled={iceCreamordered}
            >
              {iceCreamordered ? "Ordered ✅" : "Order Now"}
            </button>
            {iceCreamordered &&<p>Ordered successfully!</p>}
      </div>
      {order && <h2>Your Order: {order}</h2>}

{order && (
  <button className="reset-button" onClick={resetOrder}>
    Reset Order
  </button>
)}

    </div>
  );
}

export default Food;
