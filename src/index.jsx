import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Bundle from './components/navbar.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/1' />
        <Route path='/:bundleId' component={Bundle} />
      </Switch>
    </BrowserRouter>
    )
  }
};

ReactDOM.render(<Navbar />, document.getElementById('Navbar'));
