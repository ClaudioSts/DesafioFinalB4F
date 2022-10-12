import React, { useState } from "react";
import "./searchBar.module.css";

export const companies = [
  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" },
];

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  if (searchInput.length > 0) {
    companies.filter((company) => {
      return company.name.match(searchInput);
    });
  }

  return (
    <div className="srcContainer">
      <div className="src">
        <input
          type="text-search"
          className="srcInput"
          placeholder="Search"
          onChange={(e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />

        <button className="button2" type="submit">
          <img src="./img/lupa.png" height={18} />
        </button>
      </div>
    </div>
  );
}
