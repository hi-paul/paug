import React from "react";
import styled from "styled-components";
import PaugItem from "./PaugItem";

const PaugListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function PaugList({ data }) {
  return (
    <PaugListBlock>
      {data.map((item, index) => {
        return <PaugItem key={index} text={item.name}></PaugItem>;
      })}
    </PaugListBlock>
  );
}

export default PaugList;
