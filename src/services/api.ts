//import { resolve } from "path/posix";
import { TData } from "../utils/types";

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
  await fetch('https://botw-compendium.herokuapp.com/api/v2/all', {
    //mode: 'no-cors',
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  })
  //.then(res => {
  //  console.log(res)
  //  return res.text()
  //})
  //.then(res => {
  //  console.log(res)
  //  return res ? JSON.parse(res) : {}
  //})
  //.then(data => data)
  .then((res => {
      return res.status === 200 ? res.json() : res.json().then((err) => Promise.reject(err));
  //    return res.json();
    }))
    .then(data => data)