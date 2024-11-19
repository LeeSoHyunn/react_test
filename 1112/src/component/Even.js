import { useEffect } from "react";

function Even() {
    useEffect(() => {
        //클린업, 정리함수
        return () => {
            console.log("언마운트됨");
        }
    },[]);

    return(
        <div> 짝수 입니다</div>
    )
};

export default Even;