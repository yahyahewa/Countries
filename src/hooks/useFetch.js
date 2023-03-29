import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setdata] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  async function fetchUrl(url) {
    try {
      setLoading(true);
      const fetchLink = await fetch(url);
      const dataJson = await fetchLink.json();
      setdata(dataJson);
    } catch (error) {
      setError(`your error: ${error}`);
    }
    setError(false);
  }
  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return { data, error, loading };
}
export default useFetch;
