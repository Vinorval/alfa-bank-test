import { store } from '../services/store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { rootReducer } from '../services/reducers/rootReducer';

export type TFood = {
    category: string,
    common_locations: ReadonlyArray<string>,
    cooking_effect: string,
    description: string,
    hearts_recovered: string,
    id: number,
    name: string,
    image: string,
    like?: boolean | null 
}

export type TData = {
  creatures: { food: ReadonlyArray<TFood>, non_food: ReadonlyArray<TFood> },
  equipment: [],
  materials: [],
  monsters: [],
  treasure: []
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, Action>
>; 
export type AppDispatch = typeof store.dispatch; 