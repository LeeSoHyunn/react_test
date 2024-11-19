import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Button from './components/Button';
import { useState } from 'react';
import Register from './1015/Register';

function App() {
  // const [count, setCount] = useState(0);
  // console.log(count);
  // function onIncrease() {
  //   setCount( count +1 );
  // }
  
  return (
    <div className="App">
      {/* <Body/> */}
      <Register/>
      {/*
      <h1> {count} </h1>
      <button onClick={ onIncrease }> + </button>

      
      <Button text={'메일'} color={'red'}/>
      <Button text ={'블로그'}/>
      */}
    </div>
  );
}

export default App;
