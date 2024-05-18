import { useDispatch, useSelector } from "react-redux";
import {
  changeSearch,
  startSearch,
} from "../../../features/sllices/productSllice";
import { useState } from "react";
import s from "../SearchPanel/searchPanel.module.scss";
import Header from '../../Header/Header';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const handleChangeSearch = (newValue) => {
    dispatch(changeSearch(newValue));
  };
  const { searchValue } = useSelector((state) => state.product);
  console.log(searchValue);
  return (
    <>
    <Header/>
    <div className={s.search}>
      <input
        className={s.search_input}
        value={searchValue}
        onChange={(e) => handleChangeSearch(e.target.value)}
        placeholder="Write product name"
      />
      <button className={s.search_btn} onClick={() => dispatch(startSearch())}>
        Search
      </button>
    </div>
    </>
  );
};

export default SearchPanel;
