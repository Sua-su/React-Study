import { useState } from "react";

function Factorial(props) {
    function factorial(n){
        console.log(`factorial(${n})`);
        if (n <= 1) return 1; // Base case to prevent infinite recursion
        return n * factorial(n-1);
    }
    const [isPolite, setIsPolite] = useState(true);
 
    return(
        <>
            <label>n: </label>
            <b>{props.n} </b>
            <b>{factorial(props.n)} </b>
            <br />
            <button onClick={() => {setIsPolite(!isPolite)}}>
                {isPolite ? "정중하게" : "무례하게"}
            </button>
            <p>{isPolite ? "감사합니다!" : "더 주세요!"}</p>
        </>
    )
}
export default Factorial;