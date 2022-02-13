import { store } from '../services/store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { rootReducer } from '../services/reducers/rootReducer';

export type TGame = {
    category: string,
    common_locations: ReadonlyArray<string>,
    cooking_effect: string,
    description: string,
    hearts_recovered: string,
    id: number,
    name: string,
    image: string
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, Action>
>; 
export type AppDispatch = typeof store.dispatch; 