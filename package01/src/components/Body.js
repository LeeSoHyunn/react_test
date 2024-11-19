import { useState } from "react";
import Bulb from "./Bulb";
import Count from "./Count";

function Body() {
    

    
    return(
        <>
        <Count/>
        <Bulb/>
        </>
    );

}


{/*
function Body({text = '클릭 ', color='pink'}) {
    function handleClick(e) {
        alert("버튼클릭!!!!");
        console.log(e);
        console.log(e.target.name);
    }

    return(
        <button name={text} onClick={handleClick} style={{color}}>
            버튼: {text} </button>

    );

}
    */}

export default Body;