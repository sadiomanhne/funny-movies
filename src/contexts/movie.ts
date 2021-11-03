import React, { useContext } from "react";
import IMovie from "../types";

interface IDataContext {
  movies?: IMovie[];
  setMovies?: any;
}
const DataContext = React.createContext<IDataContext>({});
const useMovies = () => useContext(DataContext);
const DataContextProvider = DataContext.Provider;

export { DataContextProvider, useMovies };
