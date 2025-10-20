import { useMemo, useState } from "react";

function Factorial(props) {
    const [isPolite, setIsPolite] = useState(true);
    
    function factorial(n){
        console.log(`factorial(${n})`);
        if (n <= 1) return 1; 
        let result = n;
        for (let i = n - 1; i >= 1; i--){
            result *= i;
        }
        return result;
    }
    
    const result = useMemo(() => factorial(props.n), [props.n]);
 
    return(
        <>
            <br />
            <label>n: </label>
            <b>{props.n} </b>
            <br />
            <b>{result} </b>
            <button onClick={() => {setIsPolite(!isPolite)}}>
                {isPolite ? "정중하게" : "무례하게"}
            </button>
            <p>{isPolite ? "감사합니다!" : "더 주세요!"}</p>
        </>
    )
}
export default Factorial;