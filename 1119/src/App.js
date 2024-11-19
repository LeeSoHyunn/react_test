import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useRef, useState } from 'react';

const mokTodo = [
  {
    id : 0,
    isDone : false,
    content: "React 공부하기",
    createDate : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content: "영어 단어 공부하기",
    createDate : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content: "수업 복습하기",
    createDate : new Date().getTime()
  }
];


function App() {
  const [todo, setTodo] = useState(mokTodo); //배열로 저장
  const idRef = useRef(3); //3부터 시작
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current,
      isDone : false,
      content: content,
      createDate : new Date().getTime()
    };
    setTodo([newItem, ...todo]); //스프레드
    idRef.current += 1;
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate }/>
      <TodoList />
    </div>
  );
}

export default App;
