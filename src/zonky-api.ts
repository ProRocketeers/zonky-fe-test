import Axios, { Canceler } from "axios";
import { API_DOMAIN } from "./constants";
import { getSampleSize } from "./utils";

// Using Axios with request cancellation, since AbortController used in fetch is not supported widely
export let cancelRequest: Canceler | null;

export const getLoans = async ({
  chosenRating
}: {
  chosenRating: string[];
}) => {
  cancelRequest = null;

  return Axios.get(
    `${API_DOMAIN}/loans/marketplace?rating__in=${JSON.stringify(
      chosenRating
    )}&fields=amount%2Cid%2Crating`,
    {
      cancelToken: new Axios.CancelToken(function executor(c) {
        cancelRequest = c;
      }),
      headers: {
        "x-size": getSampleSize(),
        "x-order": "-datePublished"
      }
    }
  );
};
