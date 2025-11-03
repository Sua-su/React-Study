import { useState } from "react";
import Greeting from "./Greeting";

function LoginButton(props){
    return(
        <button onClick = {props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function LoginControl(props){
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsloggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsloggedIn(false);
    }

    let button;
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>
    }else{
        button = <LoginButton onClick={handleLoginClick}/>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    );
}

export default LoginControl;