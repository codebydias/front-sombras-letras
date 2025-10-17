import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

interface UserContextProps {
  isLogged: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps>({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem("email"));

  const login = (email: string) => {
    sessionStorage.setItem("email", email);
    setIsLogged(true);
  };

  const logout = () => {
    
    axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      withCredentials: true,
    });

    sessionStorage.removeItem("email");
    setIsLogged(false);
  };

  useEffect(() => {
    const handleStorage = () => {
      setIsLogged(!!sessionStorage.getItem("email"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <UserContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
