import React from 'react';

// Containers
import DashboardDisplay from '../../containers/dashboardDisplay/DashboardDisplay';
import DashboardSidebar from '../../containers/dashboardSidebar/DashboardSidebar';

const DesktopDashboard = () => {
    return (
        <div
            style={{
                display: 'flex',
                paddingLeft: 'clamp(200px, 20vw, 400px)'
            }}
        >
            <DashboardSidebar />
            <DashboardDisplay />
        </div>
    );
}

export default DesktopDashboard;
