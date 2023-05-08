import { useContext, createContext, useState, useCallback } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = useCallback(async () => {
      
  },[])
  
  const signUp = useCallback(async () => {
      
  },[])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);