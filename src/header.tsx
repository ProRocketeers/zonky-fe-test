import * as React from "react";
import styled from "styled-components";
import { getSampleSize } from "./utils";

const StyledHeader = styled.h1`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  color: #37b1bf;
`;
export const Header = () => (
  <StyledHeader>
    Kalkulačka průměrné výše {getSampleSize()} půjček
  </StyledHeader>
);
