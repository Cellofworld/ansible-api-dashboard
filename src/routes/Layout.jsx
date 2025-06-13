import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import LeftBar from "../components/leftBar/LeftBar";
import "../pages/main.css"



function Layout() {

    return (
        <>
            <header>
                <Header />
            </header>
            <div className="mainPage">
                <LeftBar />
                <Outlet />
            </div>


            
        </>
    )
}

export default Layout