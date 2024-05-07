const searchProduct = ( list, searchValue) => {
    const searchValueLower = searchValue.toLowerCase()
    const newList = list.filter(item => {
        const name = item.name.toLowerCase()
        if (name.startsWith(searchValueLower)) {
            return item
        }
    })
    return newList
}

export default searchProduct