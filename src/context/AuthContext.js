import { useContext, createContext, useState, useCallback } from "react";
import { post } from "../common/functions/http";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const signIn = useCallback(async (formData, navigation, setLoading) => {
    const { data } = await post("/signin", formData);
    if (data.status === 200) {
      setUser(data.data);
      setAuth(true)
      return navigation.navigate('HomeScreen')
    }

    alert(data.message);
    setLoading(false);
  }, []);

  const signUp = useCallback(async (formData, navigation, setLoading) => {
    const { data } = await post("/signup", formData);
    if (data.status === 200) {
      setAuth(true)
      setUser(data.data);
      return navigation.navigate('HomeScreen')
    }
    alert(data.message);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        auth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);