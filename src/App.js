import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import se from "./se.json";
import nw from "./nw.json";
import PaugTemplate from "./components/PaugTemplate";
import PaugHead from "./components/PaugHead";
import PaugList from "./components/PaugList";

const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;

function App() {
  const [sedata, setSeData] = useState([]);
  const [nwdata, setNwData] = useState([]);
  

  const [load, setLoad] = useState(false);
  const onClick = () =>{
    setLoad(!load);  
  }
  useEffect(() => {
    setSeData(se);
    setNwData(nw);
  }, []);
  
  return (
    <>
      <GlobalStyle />
      <PaugTemplate>
        <PaugHead load={load} onClick={onClick}/>
        <PaugList load={load} nwdata={nwdata} sedata={sedata}/>
      </PaugTemplate>
    </>
  );
}

export default App;
