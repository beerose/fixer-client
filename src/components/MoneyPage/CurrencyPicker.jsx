import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const CurrencyPicker = props => (
  <article>
    <CurrencyInput
      list="currencies"
      onChange={props.handleCurrencyChange}
      value={props.currency}
      maxLength="3"
      placeholder="CUR"
      size={props.size}
    />
    <datalist id="currencies">
      {props.currencies.map(x => <option key={x} value={x} />)}
    </datalist>
  </article>
);

const CurrencyInput = styled(Input)`
  width: 6em;
  font-size: 1.14285714rem !important;
  input { 
    border-radius: 0 !important; 
  };
`;

export default CurrencyPicker;
