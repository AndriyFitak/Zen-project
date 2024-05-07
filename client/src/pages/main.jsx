import CategoriesList from '../Components/Home/categories/categoriesList';
import HomeList from '../Components/Home/HomeList';
import SearchPanel from '../Components/Home/SearchPanel/SearchPanel';

const MainPage = () => {
    return (
        <main>
            <SearchPanel/>
            <CategoriesList/>
            <HomeList/>
        </main>
    )
}

export default MainPage