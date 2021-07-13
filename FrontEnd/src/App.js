import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { ThemeProvider } from './utils/themeContext';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
      <div className="transition-colors duration-300 relative md:flex bg-all-lightbg dark:bg-all-darkbg dark:text-white min-h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
