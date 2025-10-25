import { createContext, useContext, useState, useEffect } from "react";
import { parseJwt } from "../utils/jwt";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // 👈 Nuevo

  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access && refresh) {
      const decoded = parseJwt(access);
      setUser({ id: decoded.user_id, username: decoded.username,access,refresh, });
    }
    setCheckingAuth(false); // 👈 Marca que ya verificó el token
  }, []);

  const login = (access, refresh) => {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    const decoded = parseJwt(access);
    setUser({ id: decoded.user_id, username: decoded.username,access,refresh });
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, checkingAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
