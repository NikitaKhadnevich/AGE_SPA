import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';

import './index.scss'

import AppWithBackgroundVideo from './assets/BackVideo'
import store from './store';
const container = document.getElementById('root');

import { SpinerStupid, FooterStupid } from './components/SmallElems/SmallElems'
import SpinnerHome from './components/Spinner/index'
import Footer from './components/Footer/Footer'
import Posts from './App'

ReactDOM.render(
  <Provider store={store}>
    <div className='main'>
      <SpinnerHome smallElem={SpinerStupid} />
      <AppWithBackgroundVideo />
      <Posts />
      <Footer smallFooter={FooterStupid} />
    </div>
  </Provider>,
  container
);

debugContextDevtool(container, {});
