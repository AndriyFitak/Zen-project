import { useDispatch, useSelector } from "react-redux"
import { changeSearch, startSearch } from "../../../features/sllices/productSllice"
import { useState } from "react"
import s from '../SearchPanel/searchPanel.module.scss'

const SearchPanel = () => {
    const dispatch = useDispatch()
    const handleChangeSearch = ( newValue) => {
        dispatch(changeSearch(newValue))
    }
    const { searchValue} = useSelector(state => state.product)
    console.log(searchValue)
    return (
        <>
        <input className={s.Search} value={searchValue} onChange={e => handleChangeSearch(e.target.value)} placeholder="Write product name"/>
        <button className={s.btnSearch} onClick={() => dispatch(startSearch())}>Search</button>
        </>
    )
}

export default SearchPanel