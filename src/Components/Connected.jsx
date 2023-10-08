import React from "react";
import './connected.css';


const Connected = (props) => {
    return (
        <div className="connected-container">
            <div className="connected-box">

                {/* <p className="connected-header">Logged in with Metamask</p> */}
                <p className="connected-account">Logged in with Metamask Account : {props.account}</p>
                <p className="connected-account">Remaining Time : {props.remainingTime}</p>
                { props.showButton ? (
                    <p className="connected-account2">You have already voted</p>
                ) : (
                    <div>
                        <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
                <br />
                <button className="login-button" onClick={props.voteFunction}>Vote</button>

                    </div>
                )}
                
                <table id="myTable" className="candidates-table">
                    <thead>
                    <tr>
                        <th>Index</th>
                        <th>Candidate name</th>
                        <th>Candidate votes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.candidates.map((candidate, index) => (
                        <tr key={index}>
                        <td>{candidate.index}</td>
                        <td>{candidate.name}</td>
                        <td>{candidate.voteCount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Connected;