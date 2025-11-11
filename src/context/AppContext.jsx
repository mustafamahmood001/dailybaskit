import { Children, createContext,useState } from "react";
import { useNavigate } from "react-router";
import {userNavigate} from "react-dom";

export const AppContext= createContext(null);


const AppContextProvider=({children}) => {
  const navigate=useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(null);
    const [showUserLoggin, setshowUserLoggin] = useState(false);
    const value = {
      navigate,
      user, 
      setUser,
      isSeller, 
      setIsSeller,
      showUserLoggin, 
      setshowUserLoggin};
    return (
        <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
    );
}

export default AppContextProvider;