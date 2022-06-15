import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from 'component/Welcome';
import Hello from 'component/Hello';

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
      {/* 컴포넌트 호출 */}
      <Hello age={10}/>
      <Hello age={20}/>
      <Welcome/>
      <Welcome/>
      <Welcome/>

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
