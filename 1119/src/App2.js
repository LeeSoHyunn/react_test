import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useEffect, useRef, useState } from 'react';

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


function App2() {
  const [todo, setTodo] = useState([]); //mockTodo(배열)
  const idRef = useRef(0);

  useEffect(() => {
    let rawTodo = localStorage.getItem("todos");
    if(!rawTodo) {
      rawTodo = JSON.stringify([]);
    };
    const localTodo = JSON.parse(rawTodo);
    setTodo(localTodo);
    if(localTodo.length === 0){
      return;
    }

    localTodo.sort( (a,b) => Number(b.id) - Number(a.id)); 
    idRef.current = localTodo[0].id + 1;
  }, []);

  const onCreate = (content) => {
    const newItem = {
      id : idRef.current,
      isDone : false,
      content: content,
      createDate : new Date().getTime()
    };

    let newTodo= [newItem, ...todo]
    setTodo(newTodo); //스프레드
    idRef.current += 1;
    localStorage.setItem("todos",JSON.stringify(newTodo));
  }

  const onUpdate = (targetId) => {
    let newTodo = todo.map((item) => {
      if (item.id === targetId) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  

  const onDelete = (targetId) => {
    let newTodo = todo.filter((item) => item.id !== targetId );
    setTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));

  };

  return (
    <div className="App2">
      <Header />
      <TodoEditor onCreate={onCreate }/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App2;
