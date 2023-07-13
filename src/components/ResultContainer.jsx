import React from "react";
import './ResultContainer.css';
import NameCard from "./NameCard";


const ResultContainer=({suggestedNames})=>{

    const suggestedNamesjsx=suggestedNames.map(suggestedName=>{
        return <NameCard key={suggestedName} 
        suggestedName={suggestedName}/>
    })

    return(
        <div className="results-container">
                {suggestedNamesjsx}
        </div>
    )
}

export default ResultContainer;


















