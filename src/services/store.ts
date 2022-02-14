import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../services/reducers/rootReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
//расширение redux для отладки ошибок в браузере   
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({} as any) : compose;
  
const enhancer = composeEnhancers(applyMiddleware(thunk));
//создание хранилища
export const store = createStore(rootReducer, enhancer);