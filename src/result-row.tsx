import * as React from "react";
import styled from "styled-components";

const StyledResultRow = styled.div`
  text-align: center;
  font-size: 24px;
`;
export const ResultRow = ({
  loadingError,
  loadingLoans,
  averageAmount
}: {
  loadingError: string;
  loadingLoans: boolean;
  averageAmount: number | null;
}) => (
  <StyledResultRow>
    <p>{loadingError}</p>
    <p>
      {loadingLoans
        ? "Načítání..."
        : `${
            averageAmount
              ? `Průměrná výše půjček je ${new Intl.NumberFormat("cs-CZ", {
                  style: "currency",
                  currency: "CZK"
                }).format(Math.round(averageAmount * 100) / 100)}.`
              : `Vyberte rating`
          }`}
    </p>
  </StyledResultRow>
);
