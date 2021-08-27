import React, { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState([]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}
