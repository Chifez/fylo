import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
   

  return (
    <>
    {isAuthenticated === "true" ? props.children : <Navigate to ='/signin' />}
    </>
  )
}

export default ProtectedRoute