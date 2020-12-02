import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import debounce from 'lodash/debounce';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { isMobile, hasEnoughHeight, hasEnoughWidth } from './redux/responsiveness/responsive';

// Containers
import MobileLandingPage from './pages/mobileLandingPage/MobileLandingPage';
import DesktopLandingPage from './pages/desktopLandingPage/DesktopLandingPage';
import DesktopDashboard from './pages/desktopDashboard/DesktopDashboard';

const App = () => {
  const dispatch = useDispatch();
  const screenIsMobile = useSelector(state => state.responsive.mobile);

  useEffect(() => {
    dispatch( isMobile( window.innerWidth <= 550 ))
    dispatch( hasEnoughHeight( window.innerHeight >= 960 ))
    dispatch( hasEnoughWidth( window.innerWidth >= 1480 ))
  }, [dispatch]);
  
  const onWindowResize = () => {
    dispatch( isMobile( window.innerWidth <= 550 ))
    dispatch( hasEnoughHeight( window.innerHeight >= 960 ))
    dispatch( hasEnoughWidth( window.innerWidth >= 1480 ))
  }

  window.onresize = debounce( onWindowResize, 200 );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DesktopDashboard} />
        {
          screenIsMobile ?
          <Route path="/" exact component={MobileLandingPage} /> : <Route path="/" component={DesktopLandingPage} />
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App;
