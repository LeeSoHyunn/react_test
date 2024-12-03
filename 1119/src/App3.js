import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import { useState } from 'react';


function App3() {
  const [count, setCount] = useState(0);
  const handelSetCount = (value) =>{
    setCount(count + value);
  }

  return (
    <div className="App3">
      <h1>이소현의 Simple Counter</h1>
      <section>
         <Viewer count = {count} /> {/* props count값을 보낸다(값만 전달) */}
      </section>
      <section>
        <Controller handelSetCount = {handelSetCount}/>
      </section>
    </div>
  );
}

export default App3;
