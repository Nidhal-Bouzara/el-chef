import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import debounce from 'lodash/debounce';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { isMobile, hasEnoughHeight } from './redux/responsiveness/responsive';

// Containers
import MobileLandingPage from './pages/mobileLandingPage/MobileLandingPage';

const App = () => {
  const dispatch = useDispatch();
  const screenIsMobile = useSelector(state => state.responsive.mobile);

  useEffect(() => {
    dispatch( isMobile( window.innerWidth <= 550 ))
    dispatch( hasEnoughHeight( window.innerHeight >= 960 ))
  }, [dispatch]);

  const onWindowResize = () => {
    dispatch( isMobile( window.innerWidth <= 550 ))
    dispatch( hasEnoughHeight( window.innerHeight >= 960 ))
  }

  window.onresize = debounce( onWindowResize, 200 );

  return (
    <BrowserRouter>
      <Switch>
        {
          screenIsMobile ?
        <Route path="/" exact component={MobileLandingPage} /> : 
          <Route path="/" render={() => <div>fallback, you are not in mobile</div>} />
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App;
