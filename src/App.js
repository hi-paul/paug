import React,{useEffect, useState} from "react";
import List from './List';
import axios from "axios";



function App() {
  const [data, setData] =useState([]);
  useEffect( async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(response.data);
    setData(response.data);
  }, []);
  const res = data.map((item,index)=>{
    return(<h3 key={index}>{item.title}---{item.body}</h3>)
  })
  return (
    <div className="App">
      
      <List data={res}/>
    </div>
  );
}

export default App;
