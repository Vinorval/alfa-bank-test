import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
} from '../actions/action';
import { TGetItemsActions } from '../actions/action';
import { TData, TFood } from '../../utils/types';

type TInitialStatte = {
    itemsRequest: boolean;
    items: ReadonlyArray<TFood> | null;
    itemsFailed: boolean;
}

const initialState: TInitialStatte = {
    itemsRequest: false,
    items: null,
    itemsFailed: false,
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
      default: {
        return state;
      }
    }
  };