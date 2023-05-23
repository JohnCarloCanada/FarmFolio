import { useEffect, useState } from "react";
import axios from "axios";

const useFetchWeather = (baseUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let controller = new AbortController();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { signal: controller.signal });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted:", err.message);
          } else {
            setFetchError(err.message);
            setData([]);
          }
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(baseUrl);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [baseUrl]);

  return { data, fetchError, isLoading };
};

export default useFetchWeather;
