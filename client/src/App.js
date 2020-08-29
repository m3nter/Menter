import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { loadUser } from './actions/authActions';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import axiosDefaults from 'axios/lib/defaults';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';

axiosDefaults.baseURL = 'http://localhost:8080';
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <div className='container'>
            <Route path='/' exact component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
