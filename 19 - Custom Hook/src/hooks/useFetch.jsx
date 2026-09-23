import { useEffect, useState } from "react";

function useFetch(url) {
  // Store the API data
  const [data, setData] = useState(null);

  // Track whether the API request is still running
  const [loading, setLoading] = useState(true);

  // Store any error that happens during fetching
  const [error, setError] = useState(null);

  // Run whenever the URL changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch data from the API
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Convert response into JavaScript data
        const result = await response.json();

        // Store the data
        setData(result);
      } catch (err) {
        // Store the error
        setError(err.message);
      } finally {
        // Request is finished
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  // Give the component access to these values
  return {
    data,
    loading,
    error,
  };
}

export default useFetch;