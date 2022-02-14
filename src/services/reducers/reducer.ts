import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    LIKE,
    DISLIKE,
    DELETECARD,
} from '../actions/action';
import { TGetItemsActions } from '../actions/action';
import { TFood } from '../../utils/types';

//типизация хранилища
type TInitialStatte = {
    itemsRequest: boolean;
    items: ReadonlyArray<TFood> | null;
    itemsFailed: boolean;
    likeItems: ReadonlyArray<TFood> | []
}

//создание всего хранилища
const initialState: TInitialStatte = {
    itemsRequest: false,
    items: null,
    likeItems: [],
    itemsFailed: false
};

export const itemsReducer = (state = initialState, action: TGetItemsActions): TInitialStatte => {
    switch (action.type) {
      case GET_ITEMS_REQUEST: {
        return { ...state, itemsRequest: true, itemsFailed: false};
      }
      //при успешном ответе с API убираем ошибки и загрузку
      case GET_ITEMS_SUCCESS: {
        return { ...state, items: action.items.creatures.food, itemsFailed: false, itemsRequest: false };
      }
      //а при не удачном ответе ловим ошибку и удаляем карточки
      case GET_ITEMS_FAILED: {
        return { ...state, itemsFailed: true, itemsRequest: false, items: null};
      }
      case LIKE: {
        return {
          ...state,
          //поиск нужной карточки в массиве и добавление ей свойства like
          items: state.items!.map(el => (el.id === action.payload.item.id ? { ...el, like: true } : el)),
          //добавляем карточку в список, где все залайканые карточки 
          likeItems: [...state.likeItems, action.payload.item ]
        }
      }
      case DISLIKE: {
        return {
          ...state,
          items: state.items!.map(el => (el.id === action.payload.item.id ? { ...el, like: false } : el)),
          //удаляем карточку из списока, где все залайканые карточки 
          likeItems: state.likeItems.filter(el => el.id !== action.payload.item.id)
        }
      }
      case DELETECARD: {
        //поиск необходимой карты для её удаление путём фильтрации всего массива
        return { ...state, items: state.items!.filter(el => el.id !== action.id)}
      }
      default: {
        return state;
      }
    }
  };