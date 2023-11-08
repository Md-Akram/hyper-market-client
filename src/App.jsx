import { NavbarSimple } from "./components/Navbar"
import { FooterWithSocialLinks } from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./hooks/AuthProvider"


function App() {

  const { loading, currentUser } = useContext(AuthContext)

  return (

    <>
      <NavbarSimple />
      <Outlet />
      <FooterWithSocialLinks />
    </>


  )
}

export default App
