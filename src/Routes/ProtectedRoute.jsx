import React from "react"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ redirectUrl, children }) {
  const user = false
  if (!user) {
    return <Navigate to={redirectUrl} />
  } else if (user) {
    return children
  }
}

export default ProtectedRoute
