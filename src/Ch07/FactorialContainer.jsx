import { useState } from "react";
import Factorial from "./Factorial";

function FactorialContainer(props) {
    const [n, setN] = useState(10);
    return(
        <>
            <label>n:</label>
            <input type="number" value={n}
                onChange={(e) => {setN(Number(e.target.value))}} />
            <Factorial n={n} />
        </>
    );
}

export default FactorialContainer;