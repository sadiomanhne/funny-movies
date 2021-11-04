import React, { useContext } from "react";
import IMovie from "../types";

interface IDataContext {
  user?: IMovie[];
  setUser?: any;
}
const AuthContext = React.createContext<IDataContext>({});
const useUser = () => useContext(AuthContext);
const DataContextProvider = AuthContext.Provider;

export { DataContextProvider, useUser };
