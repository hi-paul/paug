import React, { useContext } from "react";
import styled from "styled-components";
import PaugItem from "./PaugItem";
import { PaugContext } from "../App.js";

const PaugListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function PaugList() {
  const { sedata, load, nwdata, currentPosts } = useContext(PaugContext);
  const res = currentPosts.map((item, index) => {
    return <PaugItem key={index} df={item} />;
  });
  return (
    <PaugListBlock>
      {/* {load
        ? nwdata.map((item, index) => {
            return <PaugItem key={index} df={item}></PaugItem>;
          })
        : sedata.map((item, index) => {
            return <PaugItem key={index} df={item}></PaugItem>;
          })} */}
      {res}
    </PaugListBlock>
  );
}

export default PaugList;
