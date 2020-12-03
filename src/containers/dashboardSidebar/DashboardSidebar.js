import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// Styling
import sidebarStyle from './DashboardSidebar.module.scss';

// Images
import chefHat from '../../images/chefHat-min.png';
import sidebarDiscover from '../../images/sidebarDiscover.svg';
import sidebarSaved from '../../images/sidebarSaved.svg';
import sidebarContact from '../../images/sidebarContact.svg';

const DashboardSidebar = () => {
    const [CurrentLink, setCurrentLink] = useState(true);
    console.log(CurrentLink);
    const route = useRouteMatch();
    useEffect(() => {
        let currentLink = route.path.split('/')[0];
        console.log(currentLink, route);
        setCurrentLink(currentLink)
        return () => {
            setCurrentLink(null);
        };
    }, [route.path, route]);
    const handleLinkClick = (e) => {
        console.log(e.target.dataset.linkto);
        setCurrentLink(e.target);
    }
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
                        data-linkto="/discover" 
                        className={sidebarStyle.link}
                        onClick={handleLinkClick}
                    >
                        <img src={sidebarDiscover} className={sidebarStyle.linkIcon} alt="discover new dishes." />
                        <span className={sidebarStyle.linkText}>Discover New Recipes</span>
                    </Link>
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
