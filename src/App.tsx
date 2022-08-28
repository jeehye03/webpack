import * as React from 'react';
import { hot } from 'react-hot-loader';
import GlobalStyled from './GlobalStyle';
import Mob from './Mob';
import Web from './Web';

function App() {
  return (
    <>
      <GlobalStyled />
      {/* <Mob /> */}
      <Web />
    </>
  );
}
export default hot(module)(App);
