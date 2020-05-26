import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import AppRouter from './Router';
import { store } from './store';

// const store = createStore(reducers);
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import './scss/main.scss';

const Container = styled.div``;

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Container className="container">
          <Header />
          <div className="content">
            <AppRouter />
          </div>
          <Footer className="footer" />
        </Container>
      </Provider>
    );
  }
}

export default App;
