import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Scripts/Auth";

/* eslint @typescript-eslint/no-explicit-any: 0 */
function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  /* eslint react/jsx-props-no-spreading: 0 */
  return children;
}

export default PrivateRoute;
