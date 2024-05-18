import CategoriesList from '../Components/Home/categories/categoriesList';
import HomeList from '../Components/Home/HomeList';
import SearchPanel from '../Components/Home/SearchPanel/SearchPanel';
import './main.scss';

const MainPage = () => {
    return (
        <main className='main'>
            <SearchPanel/>
            <CategoriesList/>
            <HomeList/>
        </main>
    )
}

export default MainPage