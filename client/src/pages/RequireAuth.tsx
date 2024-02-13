import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'



interface RequireAuthProps {
  allowedRoles: string[];
}

const RequireAuth: React.FC<RequireAuthProps> = ({allowedRoles}) => {

  const location = useLocation();
  const { user } = useSelector((state : any) => state.auth)

  const ruleid = localStorage.getItem('role')
  const rule = JSON.parse(ruleid as string)

  return (
  allowedRoles.includes(rule)
  
      ? <Outlet />
        :  user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/sign-in" state={{ from: location }} replace />
  
  );
};

export default RequireAuth;
