import React from 'react';
import { Route, Switch, useLocation } from 'react-router';

// Containers
import DashboardDisplay from '../../containers/dashboardDisplay/DashboardDisplay';
import DashboardSidebar from '../../containers/dashboardSidebar/DashboardSidebar';

const DesktopDashboard = () => {
    const {pathname} = useLocation()
    return (
        <div
            style={{
                display: 'flex',
                paddingLeft: 'clamp(200px, 20vw, 400px)'
            }}
        >

            <DashboardSidebar />
            <Switch>
                <Route path="/discover" exact component={DashboardDisplay} />
            </Switch>
        </div>
    );
}

export default DesktopDashboard;
