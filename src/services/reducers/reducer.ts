import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    LIKE,
    DISLIKE,
    DELETECARD,
} from '../actions/action';
import { TGetItemsActions } from '../actions/action';
import { TData, TFood } from '../../utils/types';

type TInitialStatte = {
    itemsRequest: boolean;
    items: ReadonlyArray<TFood> | null;
    itemsFailed: boolean;
    likeItems: ReadonlyArray<TFood> | []
}

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
      case GET_ITEMS_SUCCESS: {
        return { ...state, items: action.items.creatures.food, itemsFailed: false, itemsRequest: false };
      }
      case GET_ITEMS_FAILED: {
        return { ...state, itemsFailed: true, itemsRequest: false};
      }
      case LIKE: {
        return {
          ...state,
          items: state.items!.map(el => (el.id === action.payload.item.id ? { ...el, like: true } : el)),
          likeItems: [...state.likeItems, action.payload.item ]
        }
      }
      case DISLIKE: {
        return {
          ...state,
          items: state.items!.map(el => (el.id === action.payload.item.id ? { ...el, like: false } : el)),
          likeItems: state.likeItems.filter(el => el.id !== action.payload.item.id)
        }
      }
      case DELETECARD: {
        return { ...state, items: state.items!.filter(el => el.id !== action.id)}
      }
      default: {
        return state;
      }
    }
  };