import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../appHeader/Header';
import Cards from '../cards/cards';
import { useSelector, useDispatch } from "../../services/hooks";
import { getItems } from '../../services/actions/action';

function App() {
  const dispatch = useDispatch();
  //const items = useSelector(store => store.games.items?.creatures.food);

  React.useEffect(() => {
    dispatch(getItems());
    //console.log(item)
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
