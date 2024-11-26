import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor= ({onCreate}) => {  //중괄호 안넣으면 객체로 들어감
    const [content, setContent] = useState("");

    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value ); //input이니까 value
    }
    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13)
            onSubmit();
    }

    return(
        <div className="TodoEditor">
            <h4> 새로운 Todo 작성하기 🖊</h4>
            <div className="editor_wrapper">
                <input ref={inputRef}
                    value={content}
                    onChange={ onChangeContent }
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo ... "></input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor