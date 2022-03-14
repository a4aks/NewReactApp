import React, { useState } from "react";

export const useAPI = (initialValue) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialValue);

  const fetchAPI = (api) => {
   return api
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const UpdateAPI = (api) => {
   return  api
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setData([...data, d]);
      });
  };

  return { loading, error, data, fetchAPI, UpdateAPI };
};
