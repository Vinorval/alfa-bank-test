import { TGame, AppDispatch, AppThunk } from "../../utils/types";
import { getGamesRequest } from '../api';

export const GET_ITEMS_REQUEST: 'GET_ITEMS_REGUST' = 'GET_ITEMS_REGUST';
export const GET_ITEMS_SUCCESS: 'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED: 'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';

type TGetItemsActionRequest = { readonly type: typeof GET_ITEMS_REQUEST };
type TGetItemsActionSuccess = { readonly type: typeof GET_ITEMS_SUCCESS; readonly items: readonly TGame[] };
type TGetItemsActionFailed = { readonly type: typeof GET_ITEMS_FAILED };


const getItemsRequest = (): TGetItemsActionRequest => {
    return {
      type: GET_ITEMS_REQUEST
    };
};

const getItemsSuccess = (items: readonly TGame[]): TGetItemsActionSuccess => {
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

export type TGetItemsActions = ReturnType<
  typeof getItemsRequest | typeof getItemsSuccess | typeof getItemsFailed
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