import { useRef, useState } from "react";

function Register() {
    // const [name, setName] = useState("배화");
    // const [birth, setbirth] = useState("");
    // const [contry, setContry] = useState('');
    // const [bio, setBio] = useState('');

    const [state, setState] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "" 
    })

    const refobj = useRef(100);  //ref => current(값임)
    const inputRef = useRef("");
    //console.log("렌더링!!!!");

    function onChange(e){
        refobj.current ++;
        console.log(refobj.current);
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
        console.log(e.target.name, e.target.value)
    }

    function onsubmit(){
        if(state.name.length <5){  //state.name === ""
           // console.log(inputRef.current);  //current값임!!!! 
           inputRef.current.focus();  //유효성검사 처럼.. 근데 굳이?
        }
    }

    function onClear() {
        inputRef.current.value = "";
    }



    // function onChangeName(e) {
        
    //     //console.log(e.target.value);
    //     setState({
    //         ...state,  //name을 뺀 다른 값들은 초기값으로 설정된 것으로 ...
    //         name : e.target.value
    //     })
    // }

    // function onChangeBirth(e) {
    //     setState({
    //         ...state, 
    //         birth : e.target.value
    //     })
    // }

    // function onChangeContry(e){
    //     setState({
    //         ...state,  
    //         contry : e.target.value
    //     })
    // }

    // const onChangeBio = (e) => {
    //     setState({
    //         ...state, 
    //         bio : e.target.value
    //     })
    // }

    return (
        <>
        <div>
            <button onClick={()=> {  //화살표함수로 아예 함수 지정
                refobj.current ++;
                console.log(refobj.current);
            }}>
                ref +1
            </button>
            <button onClick={ onClear }>초기화</button>
        </div>
        <div>
        <input ref= {inputRef} name="name" value={state.name}
        onChange = { onChange} placeholder="이름" />
        </div>

        <div>
        <input name="birth" type="date" value={state.birth}
        onChange={ onChange }/>
        {state.birth}
        </div>

        <div>
            <select name="contry" value={state.contry} onChange={ onChange}>
                <option value=" "> -- 선택 -- </option>
                <option value="kr">한국</option>
                <option>영국</option>
                <option>미국</option>
            </select>
            {state.contry}
        </div>

        <div>
            <textarea name="bio" value={state.bio} onChange={ onChange }/>
            {state.bio}
        </div>
        <button onClick={ onsubmit }> submit </button>
        </>
    );
}

export default Register;