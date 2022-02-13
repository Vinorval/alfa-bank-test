import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../appHeader/Header';
import Cards from '../cards/cards';
import { useSelector, useDispatch } from "../../services/hooks";
import { getItems } from '../../services/actions/action';

function App() {
  const dispatch = useDispatch();
  const item = useSelector(store => store.games.items);

  React.useEffect(() => {
    dispatch(getItems());
    //console.log(item.creatures)
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
