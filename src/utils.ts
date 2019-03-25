import { ILoanPartial } from "./types";
import { SAMPLE_SIZE_DEFAULT } from "./constants";

export const calculateAverageAmount = (loans: ILoanPartial[]): number => {
  const sum = loans.reduce((currentSum, loan) => {
    return currentSum + loan.amount;
  }, 0);
  return sum / loans.length;
};

export const getSampleSize = (): number => {
  const url = new URL(window.location.href);
  const sampleSize = url.searchParams.get("sample_size") || "";
  const sampleSizeNumber = parseInt(sampleSize, 10);

  return sampleSizeNumber || SAMPLE_SIZE_DEFAULT;
};
