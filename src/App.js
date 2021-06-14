import React,{useEffect, useState} from "react";
import List from './List';

function App() {
  const [data, setData] =useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos/";
      const response = await fetch(url);
      const results = await response.json();
      setData(results);
    }
    getData(); 
  }, [])
  
  return (
    <div className="App">
      <h1>종량제 판매업소</h1>
      <h2>{data.length}개</h2>
      <List data={data}/>
    </div>
  );
}

export default App;
