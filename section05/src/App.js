import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const user = {
    name : '홍길동',
    isLogin : true
  }

  return (
    <>
    

    {/*{user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}*/}
      <h1>안녕</h1>

    </>
  );
}

export default App;
