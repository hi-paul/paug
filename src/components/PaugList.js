import React from "react";
import styled from "styled-components";
import PaugItem from "./PaugItem";

const PaugListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function PaugList({ sedata, load, nwdata }) {
  return (
    <PaugListBlock>
      {load ? nwdata.map((item, index) => {
        return <PaugItem key={index} df={item}></PaugItem>;
      }) : sedata.map((item, index) => {
        return <PaugItem key={index} df={item}></PaugItem>;
      }) }
      
    </PaugListBlock>
  );
}

export default PaugList;
