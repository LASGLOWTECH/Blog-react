import { createContext, useEffect, useState } from "react";
import instance from "../axios.config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

        // login function
    const login = async (inputs) => {
        const res = await instance.post("/auth/login", inputs);
        setCurrentUser(res.data)
    }



// logout function

const logout = async (inputs) => {
    const res = await instance.post("/auth/logout");
    setCurrentUser(null)
};
// constantly upate current user
useEffect(()=>{
localStorage.setItem("user", JSON.stringify(currentUser));
}, [currentUser]);

return(
<AuthContext.Provider value={{currentUser, login, logout}}>
{children}



</AuthContext.Provider>
)
}