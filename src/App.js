import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import List from "./List";
import PaugTemplate from "./components/PaugTemplate";
import PaugHead from "./components/PaugHead";

const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos/";
      const response = await fetch(url);
      const results = await response.json();
      setData(results);
    };
    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <PaugTemplate>
        <PaugHead />
      </PaugTemplate>
    </>
  );
}

export default App;
