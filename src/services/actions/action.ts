import { formatDiagnostic } from "typescript";
import { TData, TFood, AppDispatch, AppThunk } from "../../utils/types";
import { getGamesRequest } from '../api';

export const GET_ITEMS_REQUEST: 'GET_ITEMS_REGUST' = 'GET_ITEMS_REGUST';
export const GET_ITEMS_SUCCESS: 'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED: 'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';

export const LIKE: 'LIKE' = 'LIKE';
export const DISLIKE: 'DISLIKE' = 'DISLIKE';
export const DELETECARD: 'DELETECARD' = 'DELETECARD';

type TGetItemsActionRequest = { readonly type: typeof GET_ITEMS_REQUEST };
type TGetItemsActionSuccess = { readonly type: typeof GET_ITEMS_SUCCESS; items: TData };
type TGetItemsActionFailed = { readonly type: typeof GET_ITEMS_FAILED };

type TLike = { readonly type: typeof LIKE; payload: {item: TFood, like: boolean} }
type TDisLike = { readonly type: typeof DISLIKE; payload: {item: TFood, like: boolean} }
type TDelete = { readonly type: typeof DELETECARD; id: number }

const getItemsRequest = (): TGetItemsActionRequest => {
    return {
      type: GET_ITEMS_REQUEST
    };
};

const getItemsSuccess = (items: TData): TGetItemsActionSuccess => {
    return {
      type: GET_ITEMS_SUCCESS,
      items: items
    };
};
  
const getItemsFailed = (): TGetItemsActionFailed => {
    return {
      type: GET_ITEMS_FAILED
    };
};

export const getLike = (item: TFood): TLike => {
  return {
    type: LIKE,
    payload: {
      item,
      like: true
    }
  }
}

export const getDisLike = (item: TFood): TDisLike => {
  return {
    type: DISLIKE,
    payload: {
      item,
      like: false
    }
  }
}

export const deleteCard = (id: number): TDelete => {
  return {
    type: DELETECARD,
    id
  }
}

export type TGetItemsActions = ReturnType<
  typeof getItemsRequest | typeof getItemsSuccess | typeof getItemsFailed | typeof getLike | typeof getDisLike | typeof deleteCard
>;

export const getItems: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        getItemsRequest();
        getGamesRequest().then(res => {
            console.log(res)
            return dispatch(getItemsSuccess(res.data));
        })
        .catch((err) => {
            console.log(err)
            dispatch(getItemsFailed())} );
    };
}