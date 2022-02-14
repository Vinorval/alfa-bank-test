import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../appHeader/Header';
import Cards from '../cards/cards';
import { useSelector, useDispatch } from "../../services/hooks";
import { getItems } from '../../services/actions/action';

function App() {
  const dispatch = useDispatch();
  const [isLikeList, setLikeList] = React.useState<boolean>(false);

  const clickChangeList = () => setLikeList(!isLikeList);

  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      <Header listChange={clickChangeList} />
      <Cards list={isLikeList}/>
    </div>
  );
}

export default App;
