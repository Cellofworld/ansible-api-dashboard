import "./navigation.css"
import { NavLink } from "react-router-dom"; 
import { FiHome } from "react-icons/fi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { LuServer } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

function Navigation() {


    return (
        <div className="mennuNavCont">
            <div className="menuNavConts">

                                <NavLink to="/" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                    
                                    <div className="menuNavIcon"><FiHome /></div>   
                                    <div>Dashboard</div>                                 
                                </NavLink>
                                <NavLink to="/playbooks" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                    
                                    <div className="menuNavIcon"><FaRegCirclePlay /></div>  
                                    <div>Playbooks</div>                                  
                                </NavLink>
                                <NavLink to="/inventory" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                
                                    <div className="menuNavIcon"><LuServer /></div>   
                                    <div>Inventory</div>                                 
                                </NavLink>
                                <NavLink to="/" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                
                                    <div className="menuNavIcon"><IoDocumentTextOutline /></div>  
                                    <div>Tasks</div>                                  
                                </NavLink>
                                <NavLink to="/" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                
                                    <div className="menuNavIcon"><IoIosTimer /></div>  
                                    <div>Job history</div>                                  
                                </NavLink>
                                <NavLink to="/" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                
                                    <div className="menuNavIcon"><LuUsers /></div>  
                                    <div>Users</div>                                  
                                </NavLink>
                                <NavLink to="/" className={({isActive}) => isActive ? "nav-item-active menuNavItems" : "nav-item menuNavItems"} >
                                
                                    <div className="menuNavIcon"><LuSettings /></div>  
                                    <div>Settings</div>                                  
                                </NavLink>
                                                 
            </div>

        </div>
    )
}

export default Navigation