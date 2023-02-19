import React, { useState, useEffect } from "react";
import yelp from "../Api/yelp";
export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const data = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something Went Wrong");
    }
  };
  useEffect(() => {
    () => {
      setSearch("pasta");
    };
    data();
  }, []);
  return [data, result, errorMessage];
};
