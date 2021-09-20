import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';

import './index.css'
import './components/Structure/structure.css'
import './components/Technologies/technologies.css'
import './components/Units/units.css'
import './components/Civil/civil.css'

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
