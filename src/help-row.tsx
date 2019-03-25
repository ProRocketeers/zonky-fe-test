import styled from "styled-components";
import * as React from "react";

const StyledHelperRow = styled.p`
  text-align: center;
  font-size: 10px;
`;

export const HelperRow = () => (
  <StyledHelperRow>
    *Pro změnu velikosti vzorku můžete použít ?sample_size url parametr.
  </StyledHelperRow>
);
