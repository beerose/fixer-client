import React from 'react';
import styled from 'styled-components';
import { Button as SemanticButton } from 'semantic-ui-react';

const chooseButtonState = (active, handleConvertClicked) => active
  ? { color: 'teal', onClick: handleConvertClicked }
  : { disabled: true };

const ConvertButton = ({ validCurrency, handleConvertClicked, size }) => (
  <Button
    type="submit"
    size={size}
    {...chooseButtonState(validCurrency, handleConvertClicked)}
  >Convert</Button>
);

const Button = styled(SemanticButton)`
  transition: all 0.2s ease-in !important;
`;

export default ConvertButton;
