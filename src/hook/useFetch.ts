import { useEffect, useState } from "react";

// 커스텀 훅 
export default function useFetch(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);

  return data;
}