import React from "react"
import { Route, Routes } from "react-router-dom"
import * as Pages from "../Pages"
import ProtectedRoute from "./ProtectedRoute"

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/admin-login" element={<Pages.AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute redirectUrl="/admin-login">
            <Pages.AdminPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default MainRouter
