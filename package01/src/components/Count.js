import { useState } from "react";

function Count() {
const [count, setCount] = useState(0);
   
    console.log(count);
    function onIncrease() {
      setCount( count +1 );
    }

    return(
        <>
        <h1> {count} </h1>
        <button onClick={ onIncrease }> + </button>
        </>
    );
};

export default Count;

