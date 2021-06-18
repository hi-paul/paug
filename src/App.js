import React, { useEffect, useState, createContext } from "react";
import { createGlobalStyle } from "styled-components";
import se from "./se.json";
import nw from "./nw.json";
import PaugTemplate from "./components/PaugTemplate";
import PaugHead from "./components/PaugHead";
import PaugList from "./components/PaugList";
import Pagination from "react-js-pagination";
import "./Paging.css";
const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;
export const PaugContext = createContext();
function App() {
  const [sedata, setSeData] = useState([]);
  const [nwdata, setNwData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage] = useState(10); // 보여지는 개수 설정
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [load, setLoad] = useState(false);
  const currentPosts = nwdata.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onClick = () => {
    setLoad(!load);
  };
  useEffect(() => {
    // setSeData(se);
    setNwData(nw);
  }, []);

  return (
    <PaugContext.Provider value={{ load, onClick, currentPosts, sedata }}>
      <GlobalStyle />
      <PaugTemplate>
        <PaugHead />
        <PaugList />
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={nwdata.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={paginate}
        />

        {/* <Paging
          postsPerPage={postsPerPage}
          totalPosts={nwdata.length}
          paginate={paginate}
        /> */}
      </PaugTemplate>
    </PaugContext.Provider>
  );
}

export default App;
