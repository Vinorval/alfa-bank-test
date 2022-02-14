import { TData } from "../utils/types";
//типизация запроса
export type TResponseBody<TDataKey extends string = '', TDataType = {}> = {
    [key in TDataKey]: TDataType
  } & {
    success: boolean;
    message?: string;
    headers?: Headers;
    name?: string;
};

export const getGamesRequest = async (): Promise<
  TResponseBody<'data', TData>
  > =>
  //запрос на получение всех данных с API
  await fetch('https://botw-compendium.herokuapp.com/api/v2/all', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  })
  .then((res => {
    //проверка ответа запроса по его статусу
      return res.status === 200 ? res.json() : res.json().then((err) => Promise.reject(err));
    }))
    .then(data => data)