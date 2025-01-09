import React,{ useState, useEffect, use} from "react";
import Greeters from "./Greeters";
import Loading from "./Loading";
import '../styles/app.css';

const App = () =>{

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const UpdatedText = (e) =>{
        setText(e.target.value)
    }
    const onConfirmClick = ()=>{
        setLoading(false)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])

    if(loading){
        return(
        <>
        <Loading onConfirmClick={onConfirmClick}/>
        </>
        )
    }
    return(
        <>
            <Greeters phrase={"Nice to meet you"} name={"Daniel!"}/>
            <Greeters phrase={"How is it going"} name={"Harry!"}/>
            <Greeters phrase={"What have you been upto"} name={"Lee!"}/>
            <input type="text" value={text} onChange={UpdatedText}/>
            <p>Logging in with username: {text}</p>
        </>
    )
}

export default App;