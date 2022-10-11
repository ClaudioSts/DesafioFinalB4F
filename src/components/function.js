import React, { useContext, useRef, useState } from "react";
import CompanyInfoList from "./CompanyInfoList";
import { companies } from "./searchBar";

const CompSearch = () => {
  const [company, setCompany] = useContext(CompListContext);
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filtered = company.filter((res) => {
    return res.company.toLowerCase().includes(searchField.toLowerCase());
  });

  const inputRef = useRef(null); // 1. Create the ref

  const handleClick = () => {
    const val = inputRef.current.value; // 3. Get the value
    a = countries.filter((c) => c.name.includes(val));
    console.log(val);
    setSearchField(val);

    if (val === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const searchList = () => {
    if (searchShow) {
      return <CompanyInfoList filtered={filtered} />;
    }
  };

  return (
    <>
      <div>
        <em>
          NOTE: if you search "ABC" or "EFGH" you will see results - my goal is
          to see those results after clicking button
        </em>
        <br />
        <input
          type="search"
          placeholder="search Company Title"
          ref={inputRef}
        />
        <button onClick={handleClick}>Enter</button>
      </div>
      {searchList()}
    </>
  );
};

export default CompSearch;
