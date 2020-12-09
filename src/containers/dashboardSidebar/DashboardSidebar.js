import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styling
import sidebarStyle from './DashboardSidebar.module.scss';

// Images
import chefHat from '../../images/chefHat-min.png';
import sidebarDiscover from '../../images/sidebarDiscover.svg';
import sidebarSaved from '../../images/sidebarSaved.svg';
import sidebarContact from '../../images/sidebarContact.svg';

// Components
import DiscoverSpread from '../../components/discoverSpread/DiscoverSpread';

const DashboardSidebar = () => {

    const path = useLocation().pathname;
    return (
        <div className={sidebarStyle.sidebarContainer}>
            <div className={sidebarStyle.head}>
                <img src={chefHat} className={sidebarStyle.logo} alt="" />
                <span className={sidebarStyle.title}>El Chef</span>
            </div>
            <div className={sidebarStyle.divider}></div>
            <ul className={sidebarStyle.list}>
                <li>
                    <Link 
                        to='/discover'
                        className={sidebarStyle.link}
                    >
                        <img src={sidebarDiscover} className={sidebarStyle.linkIcon} alt="discover new dishes." />
                        <span className={sidebarStyle.linkText}>Discover New Recipes</span>
                    </Link>
                    {
                        path === '/discover'? <DiscoverSpread /> : null
                    }
                </li>
                <li>
                    <Link to='/' className={sidebarStyle.link}>
                        <img src={sidebarSaved} className={sidebarStyle.linkIcon} alt="discover new dishes." />
                        <span className={sidebarStyle.linkText}>My Saved Recipes</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className={sidebarStyle.link}>
                        <img src={sidebarContact} className={sidebarStyle.linkIconContact} alt="discover new dishes." />
                        <span className={sidebarStyle.linkText}>Contact Us</span>
                    </Link>
                </li>
                
            </ul>
        </div>
    );
}

export default DashboardSidebar;
