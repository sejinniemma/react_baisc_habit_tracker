import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch, firstPage }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    value && onSearch(value);
    inputRef.current.value = "";
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
    return;
  };

  const backToList = () => {
    firstPage();
  };

  return (
    <header className={styles.header}>
      <img
        onClick={backToList}
        className={styles.img}
        src="./img/logo.png"
        alt="logo"
      />
      <h1 onClick={backToList} className={styles.title}>
        Youtube
      </h1>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick} className={styles.button} type="submit">
        <img src="./img/search.png" alt="search"></img>
      </button>
    </header>
  );
};

export default SearchHeader;
