import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import HomePage from './containers/HomePage';

import './app.global.css';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <HomePage />
    </AppContainer>,
    document.getElementById('root')
  )
);
