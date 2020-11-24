import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import debounce from 'lodash/debounce';

// Containers
import MobileLandingPage from './containers/mobileLandingPage/MobileLandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true,
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isMobile: window.innerWidth <= 550
    })
  }

  onWindowResize = () => {
    this.setState({
      ...this.state,
      isMobile: window.innerWidth <= 550
    })
  }

  render(props) {
    window.onresize = debounce(this.onWindowResize, 200);
    return (
      <BrowserRouter>
        <Switch>
          {
            this.state.isMobile ?
            <Route path="/" exact component={MobileLandingPage}/> : 
            <Route path="/" render={() => <div>fallback, you are not in mobile</div>} />
          }
        </Switch>
      </BrowserRouter>
    )
  };
}

export default App;
