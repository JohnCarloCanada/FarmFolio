import { useState, useEffect } from "react";

const useGetLatandLong = () => {
  const [coords, setCoords] = useState({});
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoords({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setIsWeatherLoading(false);
            setError(null);
          },
          (error) => {
            console.error("Error getting location:", error);
            setIsWeatherLoading(false);
            setError(error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setIsWeatherLoading(false);
        setError("Geolocation is not supported.");
      }
    };

    getCurrentLocation();
  }, []);

  return { coords, error, isWeatherLoading };
};

export default useGetLatandLong;
