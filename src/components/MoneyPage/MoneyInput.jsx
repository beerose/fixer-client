import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

import CurrencyPicker from './CurrencyPicker';
import ConvertButton from './ConvertButton';
import defaultProps from 'recompose/defaultProps';

const MoneyInput = props => (
  <Container>
    <Input
      type="number"
      defaultValue={props.amount}
      onChange={props.handleAmountChange}
      size={props.size}
      action
    >
      <input />
      <CurrencyPicker {...props} />
      <ConvertButton {...props} />
    </Input>
  </Container>
);

const Container = styled.section`
  display: inline-block;
  padding-bottom: 1em;
  flex: 0;
`;

export default defaultProps({ size: 'large' })(MoneyInput);
