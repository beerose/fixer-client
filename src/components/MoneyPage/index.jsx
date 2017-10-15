import React from 'react';
import { withStateHandlers, withProps, compose } from 'recompose';
import styled from 'styled-components';

import { currencies, currencySet, getState } from 'logic';
import MoneyInput from './MoneyInput';
import Rates from './Rates';

const MoneyPage = props => (
  <Article>
    <MoneyInput {...props} currencies={currencies} />
    <Rates rates={props.rates} swapCurrency={props.swapCurrency} />
  </Article>
);

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const enhance = compose(
  withStateHandlers({
    rates: currencies.map(currency => ({ currency, value: null })),
  }, {
    updateState: () => converted => ({
      rates: Object.entries(converted)
        .map(([currency, value]) => ({ currency, value })),
    }),
  }),
  withStateHandlers({
    currency: '',
    amount: 100.0,
  }, {
    handleAmountChange: () => event => {
      const amount = parseFloat(event.target.value);
      if (amount) return { amount };
      return {};
    },
    handleCurrencyChange: () => event => {
      const currency = event.target.value.toUpperCase();
      return { currency };
    },
    swapCurrency: () => newCurrency => ({ currency: newCurrency }),
    handleConvertClicked: (state, props) => () => {
      getState(state.currency, state.amount)
        .then(res => {
          if (res && res.converted) props.updateState(res.converted);
        });
      return {};
    },
  }),
  withProps(({ currency }) => ({ validCurrency: currencySet.has(currency) })),
);

export default enhance(MoneyPage);
