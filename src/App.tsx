import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from 'component/Welcome';
import Hello from 'component/Hello';
import Header from 'component/layout/Header';
import DayList from 'component/DayList';
import Day from 'component/Day';

// react-router-dom : v6 Switch >  Routes 문법 변경됨
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Empty from 'component/Empty';
import CreateWord from 'component/CreateWord';
import CreateDay from 'component/CreateDay';

// 함수형 컴포넌트 JSX
function App() {
  // 변수 설정
  const name: string = "Tom";
  const naver: any = {
    name: "네이버",
    url: "https://naver.com"
  }
  //const age: number = 0;


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<DayList/>} />
          {/* : 붙이면 변수값을 받을 수 있다 */}
          <Route path='/day/:day' element={<Day/>} />
          <Route path='/create_word' element={<CreateWord/>} />
          <Route path='/create_day' element={<CreateDay/>} />
          <Route path='*' element={<Empty/>}/>
        </Routes>
      </BrowserRouter>
      
      
      {/* 컴포넌트 호출 */}
      {/* <Hello age={10}/>
      <Hello age={20}/>
      <Welcome/>
      <Welcome/>
      <Welcome/> */}

      {/* <h1 
        style={{
          color:"F0f",
          backgroundColor: "green"
        }}
        
      >
        hello world! {name} <p>{ 2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a> */}



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
