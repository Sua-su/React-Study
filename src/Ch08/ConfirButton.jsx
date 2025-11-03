import { useState } from "react"

function ConfirButton(props){
    const [isConfirmed, setIsConfirmend] = useState (false);
    const handleConfirm = () => {
        //setIsConfirmend(!isConfirmed);
        setIsConfirmend(prevIsConfiremd => !prevIsConfiremd);
    }

    return (
        isConfirmed ? "checked":    //체크 했을시 checked
        <button onClick={handleConfirm} disabled={isConfirmed}>
            Check
        </button>
    )
}

export default ConfirButton;

//확인 버튼 누를시 비활성화 

