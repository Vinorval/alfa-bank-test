import React from 'react';
import './App.css';
import Header from '../appHeader/Header';
import Cards from '../cards/cards';
import Footer from '../footer/footer';
import { useDispatch } from "../../services/hooks";
import { getItems } from '../../services/actions/action';

function App() {
  const dispatch = useDispatch();
  //Создать булевое значение для верной фильтрации карточек (только с лайками/все)
  const [isLikeList, setLikeList] = React.useState<boolean>(false);
  //функция для кнопки в шапке сайта, где происходит фильтрация карточек
  const clickChangeList = () => setLikeList(!isLikeList);

  //запрос на API для получения карточек
  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      <Header itsLike={isLikeList} listChange={clickChangeList} />
      <Cards list={isLikeList}/>
      <Footer />
    </div>
  );
}

export default App;
