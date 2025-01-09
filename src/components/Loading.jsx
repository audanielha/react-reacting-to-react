import React, {useState} from "react";

const Loading = (props) =>{

    return (
        <>
            <div className="loading-container">
                <h2>WEBSITE LOADING...</h2>
                <button onClick={props.onConfirmClick}>Confirm</button>
            </div>
        </>
    )
}

export default Loading