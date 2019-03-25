import { RATING_CONFIG } from "./constants";
import React from "react";
import styled from "styled-components";

const StyledRatingRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledRatingField = styled.div<{
  bcgColor: string;
  borderColor: string;
  active: boolean;
}>`
  margin-top: 8px;
  display: inline-block;
  padding: 8px 0;
  min-width: 56px;
  line-height: 14px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  background-color: ${({ active, bcgColor }) => (active ? bcgColor : "#fff")};
  color: ${({ active, bcgColor }) => (active ? "#fff" : bcgColor)};
  border: 1px solid
    ${({ active, borderColor }) => (active ? borderColor : "#e7e7e7")};
  &:hover {
    cursor: pointer;
    background-color: ${({ bcgColor }) => bcgColor};
    border: 1px solid ${({ borderColor }) => borderColor};
    color: #fff;
  }
`;

export function RatingRow({
  toggleRating,
  ratings
}: {
  toggleRating: (rating: string) => void;
  ratings: string[];
}) {
  return (
    <StyledRatingRow>
      {RATING_CONFIG.map(rating => (
        <StyledRatingField
          active={ratings.includes(rating.type)}
          bcgColor={rating.bcgColor}
          borderColor={rating.borderColor}
          key={rating.type}
          onClick={() => toggleRating(rating.type)}
        >
          {rating.type}
        </StyledRatingField>
      ))}
    </StyledRatingRow>
  );
}
