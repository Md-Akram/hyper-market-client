import { NavbarSimple } from "./components/Navbar"
import { FooterWithSocialLinks } from "./components/Footer"
import { Outlet } from "react-router-dom"


function App() {


  return (
    <>
      <NavbarSimple />
      <Outlet />
      <FooterWithSocialLinks />
    </>
  )
}

export default App
