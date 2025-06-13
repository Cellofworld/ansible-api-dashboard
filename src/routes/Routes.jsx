import { Route, Routes } from "react-router-dom"

import Layout from "./Layout"
import MainPage from "../pages/Main"
import DashboardPage from "../pages/dashboard/Dashboard"
import PlaybooksPage from "../pages/playbooks/Playbooks"
import InventoryPage from "../pages/inventory/Inventory"



function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashboardPage /> } />
                    <Route path="/playbooks" element={<PlaybooksPage />} />

                    <Route path="/inventory" element={<InventoryPage />} />

                    <Route path="*" element={<MainPage />} />
                  
                </Route>
            </Routes>
        </>
    )
}

export default Routing