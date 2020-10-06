import React from 'react';
import styled from '@emotion/styled';
/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
   {
    background-color: #555;
    padding: 1rem;
    color: #efefef;
    text-align: center;
  }
`;

export const Footer = (props: FooterProps) => {
  return <StyledFooter>Copyright 2020 Nitro3</StyledFooter>;
};

export default Footer;
