import { useState } from "react";

function Bulb() {
    const [light, setLight] = useState('OFF');

    function onLight() {
        setLight(light == "OFF" ? "ON" : "OFF");
    }


    return(
        <>
        {(light === "ON") ? (
        <h1 style={{ backgroundColor: "orange"}}> {light} </h1>
        ): 
        ( 
            <h1 style={{ backgroundColor: "pink"}}> {light} </h1>
        )}
        <button onClick={ onLight }>
            { (light === "ON")? "끄기" : "켜키"}
            </button>
        </>
    );
}
export default Bulb;