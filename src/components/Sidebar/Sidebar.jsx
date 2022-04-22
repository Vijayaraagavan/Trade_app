import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'
import {SidebarData}  from '../../Data/Data.js';
import {UilSignOutAlt} from "@iconscout/react-unicons";

const Sidebar = () => {
    const[selected, setSelected] = useState(0);
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="logo" /> 
                <span>Sh<span>o</span>p</span>
            </div>

            <div className="menu">
                {SidebarData.map((item,index)=>{
                    return(
                        <div className={selected===index? 'menuitem active': 'menuitem'} 
                        key={index} onClick={() => setSelected(index)} >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}  

                <div className="menuitem">
                    <UilSignOutAlt />
                </div>  
            </div>
        </div>
    )
}

export default Sidebar
