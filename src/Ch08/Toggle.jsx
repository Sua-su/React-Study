import { useState } from "react";

function Toggle(props) {
    const [isToggleOn, setisToggleOn] = useState(true);

    function handleClick(){
        setisToggleOn(!isToggleOn);
    }
    
    return (
        <div>
            <button onClick={handleClick}>
                {isToggleOn ? 'turnOn' : 'turnOff'}
            </button>
        </div>
    )
}

export default Toggle;