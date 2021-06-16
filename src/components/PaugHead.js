import React from "react";
import styled from "styled-components";

const PaugHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    text-align: center;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  
`;

function PaugHead({load, onClick}) {
  return (
    <PaugHeadBlock>
      <h1>종량제 판매소</h1>
      <div className="tasks-left">
        <button onClick={onClick}>{load ? "동남구" : "서북구"}</button>  
      </div>
      
    </PaugHeadBlock>
  );
}

export default PaugHead;
