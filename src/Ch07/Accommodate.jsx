import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState();
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    
    return [count, increment, decrement];
}

function Accommodate() {
    const [count, increment, decrement] = useCounter(0);
    
    return (
        <div style={{padding: "16px"}}>
            <h2>Accommodate Component</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Accommodate;