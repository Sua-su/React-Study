import React ,{useEffect, useState} from 'react';

function Counter(props){ 
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Counter Page");


    useEffect(() =>{
            document.title=title
            return() =>{document.title='missing Count'};
            }, [title]);


    function handleClick(e) {
        setCount(count +1 );
        console.log(e.target.tagName);
        console.log(count);
    }


    return (
        <div>
            <p>{count} time Clicked</p>
            <button onClick ={handleClick}>Click</button>
            <button onClick={() => {setTitle("total$(count)Click")}}>ChangeTitle</button>
        </div>
    )
}


export default Counter;