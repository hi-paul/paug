import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import se from "../aessts/se";
import PaugTemplate from "./components/PaugTemplate";
import PaugHead from "./components/PaugHead";
import PaugList from "./components/PaugList";

const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const getData = async () => {
    //   const url = "https://jsonplaceholder.typicode.com/todos/";
    //   const response = await fetch(url);
    //   const results = await response.json();
    //   setData(results);
    // };
    setData(se);
  }, []);

  return (
    <>
      <GlobalStyle />
      <PaugTemplate>
        <PaugHead />
        <PaugList data={data} />
      </PaugTemplate>
    </>
  );
}

export default App;
