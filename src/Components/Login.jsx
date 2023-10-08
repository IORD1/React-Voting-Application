import React from "react";
import './login.css';


const Login = (props) => {
    return (

        <div className="login-container">
            <div className="login-box">
                <div className="logo"></div>
                <h1 className="welcome-message" >Welcome to BlockChain Voting Application</h1>
                {/* <p className="welcome-message2">Login to Vote</p> */}
                <button className="login-button" onClick = {props.connectWallet}>Login with Metamask</button>
            </div>
        </div>
    )
}

export default Login;