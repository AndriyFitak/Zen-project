import { useDispatch } from "react-redux"
import { changeSearch } from "../../../features/sllices/productSllice"
import { useState } from "react"

const SearchPanel = ({searchValue}) => {
    const dispatch = useDispatch()
    const handleChangeSearch = ( newValue) => {
        dispatch(changeSearch(newValue))
    }

    return (
        <>
        <input value={searchValue} onChange={e => handleChangeSearch(e.target.value)} placeholder="Write product name"/>
        <button/>
        </>
    )
}

export default SearchPanel