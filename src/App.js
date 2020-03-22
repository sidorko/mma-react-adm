import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/Login';
import Organization from './pages/Organization';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*<Route c/>*/}
        <Route path={'/login'} component={null} />
        <Route path={'/'} component={Header} />
      </Switch>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path={'/org'} component={Organization} />
        <Route path="/about">
          <div>about</div>
        </Route>
        <PrivateRoute path={'/users'}>
          <div>users</div>
        </PrivateRoute>
        {/*<Route path="/users" >*/}
        {/*</Route>*/}
        <Route path="/fakelogin">
          <LoginPage />
        </Route>
        <Route path={'/login'} component={Login} />
        <Route path="/">
          <div>home</div>
          <AuthButton />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const AuthButton = () => {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;