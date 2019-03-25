import React, { useEffect, useState } from "react";
import "./App.css";
import { cancelRequest, getLoans } from "./zonky-api";
import { calculateAverageAmount } from "./utils";
import Axios from "axios";
import { RatingRow } from "./rating-row";
import { Header } from "./header";
import { ResultRow } from "./result-row";
import { HelperRow } from "./help-row";

function App() {
  const [ratings, setRatings] = useState<string[]>([]);
  const [averageAmount, setAverageAmount] = useState<number | null>(null);
  const [loadingLoans, setLoadingLoans] = useState<boolean>(false);
  const [loadingError, setLoadingError] = useState<string>("");

  const fetchLoans = async (chosenRating: string[]) => {
    try {
      if (cancelRequest) {
        cancelRequest();
      }
      if (chosenRating.length === 0) {
        setAverageAmount(null);
        setLoadingLoans(false);
        return;
      }
      setLoadingLoans(true);
      const response = await getLoans({ chosenRating });
      setAverageAmount(calculateAverageAmount(response.data));
      setLoadingError("");
      setLoadingLoans(false);
    } catch (error) {
      if (!Axios.isCancel(error)) {
        setLoadingError("Nic jsme nenašli.");
        setLoadingLoans(false);
      }
    }
  };

  useEffect(() => {
    fetchLoans(ratings);
  }, [ratings]);

  const toggleRating = (rating: string) => {
    if (ratings.includes(rating)) {
      setRatings(
        ratings.filter(currentRating => {
          return rating !== currentRating;
        })
      );
    } else {
      setRatings([...ratings, rating]);
    }
  };

  return (
    <div>
      <Header />
      <RatingRow ratings={ratings} toggleRating={toggleRating} />
      <ResultRow
        averageAmount={averageAmount}
        loadingError={loadingError}
        loadingLoans={loadingLoans}
      />
      <HelperRow />
    </div>
  );
}
export default App;
