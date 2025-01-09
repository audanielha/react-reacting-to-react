import React from "react";

const Greeters = (props) =>{
    return (
        <>
            <h1>{props.phrase}, {props.name}</h1>
        </>
    )
}

export default Greeters