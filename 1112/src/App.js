import './App.css';
import Controller from './component/Controller';
import Even from './component/Even';
import Viewer from './component/Viewer';
import { useEffect, useRef, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const isMount = useRef(false);

  // useEffect(() => {
  //   console.log(`count : ${count} / input : ${text}`);
  // }, [count, text]);

  // 1. 마운트 시점에 동작(빈 배열)
  //useEffect(() => {
  //  console.log("마운트");
  //}, []); //마운트 시점에 동작

  //2. 업데이트 시점(두번째 매개변수 없음)
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("업데이트만");
  })

  const handelSetCount = (value) =>{
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>이소현의 Simple Counter</h1>
      <section>
        <input value={text} onChange={
          (e) => {setText(e.target.value)}
        } />
      </section>
      <section>
         <Viewer count = {count} /> {/* props count값을 보낸다(값만 전달) */}
         { count %2 === 0? <Even /> : null}
      </section>
      <section>
        <Controller handelSetCount = {handelSetCount}/>
      </section>
    </div>
  );
}

export default App;
