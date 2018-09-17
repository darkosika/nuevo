import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { createStore, applyMiddleware, compose  } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import MainIndex from './components/main_index';
import CreateNew from './components/create_new';
import DetailShow from './components/detail_show';
import Search from './components/search';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promise)
  ));

ReactDOM.render(
    <Provider store={store}>
  <BrowserRouter>
    <div>
      <Switch>
    <Route path="/create" component={CreateNew}/>
    <Route path="/detail/:id" component={DetailShow}/>
    <Route path="/search" component={Search}/>
    <Route path="/" component={MainIndex}/>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();