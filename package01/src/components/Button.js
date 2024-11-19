function Button({text, color}) {
    function handleClick(e) {
        //alert("버튼클릭!!!!");
        //console.log(e);
        console.log(e.target.name);
    }
    //return 문 위에는 일반 자바스크립트 문법이 들어감
    return(
        <button name={text} onClick={handleClick} 
        onMouseEnter={handleClick}
        style={{color}}>
            버튼: {text} </button>

    );
}
export default Button;