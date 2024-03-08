import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    let filters = data.filter((a) => a.title[0] === "C");
    setData(filters);
  }
  useEffect(() => {
    getData();
  }, []);

  return data;
}
