import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
  } from 'react-redux';
  import { AppDispatch, AppThunk, RootState } from '../utils/types';
  
  // Создание хука, знающего все типы данных в хранилище
  export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
  
  // Создание хука, которые отправляет только знакомые ему экшены
  export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();