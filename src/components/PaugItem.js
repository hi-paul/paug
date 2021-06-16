import React from "react";
import styled from "styled-components";

const PaugItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

function PaugItem({ text }) {
  return <PaugItemBlock>{text}</PaugItemBlock>;
}

export default PaugItem;
