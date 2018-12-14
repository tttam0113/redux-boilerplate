import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import Header from 'containers/HeaderContainer';
import Header from 'containers/HeaderContainer';
import Footer from 'components/Footer';
import indexRoutes from 'routes';

export const history = createHistory();

class App extends React.Component {
  componentWillMount() {
    // this.props.fetchUser();
  }

  renderRoute = prop => {
    const { name, path, pathTo, component, redirect = false, exact = false } = prop;
    return redirect ? (
      <Redirect from={path} to={pathTo} key={name} />
    ) : (
      <Route path={path} component={component} key={name} exact={exact} />
    );
  };

  switchRoutes = () => <Switch>{indexRoutes.map(this.renderRoute)}</Switch>;

  renderLayout = () => (
    <div>
      <Header />
      <main>{this.switchRoutes()}</main>
      <Footer />
    </div>
  );

  render() {
    return <Router history={history}>{this.renderLayout()}</Router>;
  }
}

export default connect()(App);
