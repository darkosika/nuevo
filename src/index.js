import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { createStore, applyMiddleware, compose  } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
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
    <Route path="/posts/new" component={PostsNew}/>
    <Route path="/posts/:id" component={PostsShow}/>
    <Route path="/" component={PostsIndex}/>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();