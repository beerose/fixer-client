import React, { Component } from 'react';
import styled from 'styled-components';
import MoneyPage from './MoneyPage';

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <MoneyPage />
      </MainContainer>
    );
  }
}

const MainContainer = styled.main`
  margin: 50px;
`;

export default Main;
