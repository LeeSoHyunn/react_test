import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor= ({onCreate}) => {  //중괄호 안넣으면 객체로 들어감
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value ); //input이니까 value
    }
    const onSubmit = () => {
        onCreate(content);
    }

    return(
        <div className="TodoEditor">
            <h4> 새로운 Todo 작성하기 🖊</h4>
            <div className="editor_wrapper">
                <input value={content}
                    onChange={ onChangeContent }
                    placeholder="새로운 Todo ... "></input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor