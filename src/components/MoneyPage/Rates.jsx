import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import wobble from './keyframes/wobble';

const CurrencyButton = props => (
  <Button
    animated="vertical"
    color="teal"
    onClick={() => props.swapCurrency(props.currency)}
  >
    <Button.Content hidden><Icon name="triangle up" /></Button.Content>
    <Button.Content visible>
      <span>{props.currency}</span>
    </Button.Content>
  </Button>
);

const Rate = ({ currency, value, swapCurrency }) => (
  <RateBox>
    <ValueBox><span>{value || '?'}</span></ValueBox>
    <CurrencyButton currency={currency} swapCurrency={swapCurrency} />
  </RateBox>
);

const RateBox = styled.section`
  width: 12em;
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    width: 5em !important;
  }
  font-size: 1rem;
  font-weight: bold;
  border-top-left-radius: .28571429rem;
  border-bottom-left-radius: .28571429rem;
  
  animation: 1s ${wobble} ease-in-out;
`;

const ValueBox = styled.div`
  flex: 2;
  background: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  span {
    
  }
`;

const Rates = props => (
  <RatesContainer>
    {props.rates.map(r => (
      <Rate key={r.currency} {...r} swapCurrency={props.swapCurrency} />
    ))}
  </RatesContainer>
);

const RatesContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

export default Rates;
