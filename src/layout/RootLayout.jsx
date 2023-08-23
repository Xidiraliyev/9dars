import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


import { Outlet } from "react-router-dom"
function RootLayout() {
  return (
    <>
        <Navbar/>
        <main className="flex-grow">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default RootLayout