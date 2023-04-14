import React from "react"
import Header from "./Header"
import Footer from "./Footer"

function MainLayout({ children }) {
  return (
    <main className="">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
