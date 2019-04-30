import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeaderElement = styled.header`
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.17);
`;

const AppTitle = styled.h1`
  font-size: 1.3em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.8;
  padding: 20px;
  margin: 0;
`;

const HeaderComponent: FunctionComponent<{}> = () => {
  return (
    <HeaderElement>
      <AppTitle>
        React text editor
      </AppTitle>
    </HeaderElement>
  );
}

export default HeaderComponent;
