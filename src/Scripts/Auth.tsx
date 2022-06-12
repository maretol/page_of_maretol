import React, { createContext, ReactNode, useMemo, useState } from "react";
import { fakeAuthProvider } from "./Account";

interface AuthContextType {
  user: string;
  signin: (username: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (
    username: string,
    password: string,
    callback: VoidFunction
  ) => {
    return fakeAuthProvider.signin(username, password, () => {
      setUser(username);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = useMemo(() => ({ user, signin, signout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
