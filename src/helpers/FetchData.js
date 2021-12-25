import React, { useEffect, useState } from "react";

export const FetchData = (url) => {
  const [response, setResponse] = useState({ data: [], loading: 2 });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setResponse({ data: jdata, loading: 4 });
        }, 2000);
        const data = await fetch(url);
        const jdata = await data.json();
        setResponse({ data: jdata, loading: 1 });
      } catch (e) {
        setResponse({ data: [], loading: 3 });
      }
    };
    fetchData();
  }, []);
  return response;
};
