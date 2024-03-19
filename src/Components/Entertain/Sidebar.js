import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar} />
                </Link>
                <div className='navbar-title'>Entertainment</div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Sidebar;
