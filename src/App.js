import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Display from './components/display/Display';

function App() {
  const foodItems = [{
    id: 1,
    name: 'Tea',
    price: 10
  },
  {
    id: 2,
    name: 'Coffee',
    price: 12
  }
]
const [quantity, setQuantity] = useState({
  1: 0,
  2: 0
})

const [totalCartItems, setTotalCartItems] = useState(0)

const updateQuantity = (id, qty) => {
  // Correct way to update state
  setQuantity(prevState => ({
    ...prevState,
    [id]: parseInt(qty)
  }))
}

useEffect(() => {
  setTotalCartItems(() => {
    let total = 0
    for(const prop in quantity) {
      total += parseInt(quantity[prop])
    }
    return total
  }, [quantity])
})

  return (
    <div className="App">
      <Cart items={foodItems} quantity={quantity} updateQuantity={updateQuantity} 
        totalCartItems={totalCartItems}/>
      <Display items={foodItems} quantity={quantity} updateQuantity={updateQuantity}/>
    </div>
  );
}

export default App;
