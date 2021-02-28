import {createContext} from 'react';
export const initialState = { todo: { list: [], item: {} } };

export const Store = createContext(initialState);

export const HOST_API="http://localhost:8080/api";