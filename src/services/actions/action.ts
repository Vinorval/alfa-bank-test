import { formatDiagnostic } from "typescript";
import { TData, TFood, AppDispatch, AppThunk } from "../../utils/types";
import { getGamesRequest } from '../api';

export const GET_ITEMS_REQUEST: 'GET_ITEMS_REGUST' = 'GET_ITEMS_REGUST';
export const GET_ITEMS_SUCCESS: 'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED: 'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';

export const LIKE: 'LIKE' = 'LIKE';
export const DISLIKE: 'DISLIKE' = 'DISLIKE';

type TGetItemsActionRequest = { readonly type: typeof GET_ITEMS_REQUEST };
type TGetItemsActionSuccess = { readonly type: typeof GET_ITEMS_SUCCESS; items: TData };
type TGetItemsActionFailed = { readonly type: typeof GET_ITEMS_FAILED };

type TLike = { readonly type: typeof LIKE; payload: {id: number, like: boolean} }
type TDisLike = { readonly type: typeof DISLIKE; payload: {id: number, like: boolean} }

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

export const getLike = (id: number): TLike => {
  return {
    type: LIKE,
    payload: {
      id,
      like: true
    }
  }
}

export const getDisLike = (id: number): TDisLike => {
  return {
    type: DISLIKE,
    payload: {
      id,
      like: false
    }
  }
}

export type TGetItemsActions = ReturnType<
  typeof getItemsRequest | typeof getItemsSuccess | typeof getItemsFailed | typeof getLike | typeof getDisLike
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