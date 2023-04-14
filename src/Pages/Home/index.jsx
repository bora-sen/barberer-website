import React from "react"
import { MainLayout } from "../../Layouts"
import * as Section from "./Components"

function Home() {
  return (
    <MainLayout>
      <Section.Hero />
      <Section.Services />
      <Section.FollowSocials />
    </MainLayout>
  )
}

export default Home
