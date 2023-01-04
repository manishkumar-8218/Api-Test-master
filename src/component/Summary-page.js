import React from "react"
import { useLocation } from "react-router-dom";
import './style.css'

const Summary = () => {
    const location = useLocation();
    const summary=location.state;
    
    return (
        <div className="main-smry">
           <div className="smry-data">{summary}</div>
        </div>
    )
}

export default Summary
