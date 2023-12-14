import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Sidebar.css";
import Logo from "../../Assets/imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Assets/Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  const navigate = useNavigate();
  console.log(window.innerWidth)
  return (
    <>
    
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          <span>M</span>edha
        </span>
      </div>

      <div className="menu">
  

{SidebarData.map((item, index) => {
 
  return (
    <div
      className={selected === index ? "menuItem active" : "menuItem"}
      key={index}
      onClick={() => { 
        setSelected(index);
        navigate(item.path);
      }}
    >
      <item.icon />
      <span>{item.heading}</span>
    </div>
  );
})}

        {/* signoutIcon */}
        <div className="menuItem">
          {/* <UilSignOutAlt /> */}
        </div>
      </div>
    </motion.div>
 
    </>
  );
};

export default Sidebar;
