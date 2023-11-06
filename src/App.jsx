import { NavbarSimple } from "./components/Navbar"
import { FooterWithSocialLinks } from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./hooks/AuthProvider"


function App() {

  const { loading } = useContext(AuthContext)

  if (loading) {
    return (
      < div >
        <span id="ProgressLabel" className="sr-only">Loading</span>

        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow="75"
          className="block rounded-full bg-gray-200"
        >
          <span
            className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"

          ></span>
        </span>
      </div >
    )
  }

  return (

    <>
      <NavbarSimple />
      <Outlet />
      <FooterWithSocialLinks />
    </>


  )
}

export default App
