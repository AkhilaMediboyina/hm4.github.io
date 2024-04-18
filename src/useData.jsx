import React, { useEffect, useState } from 'react'

const useData = (city = 'Oklahoma') => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4676da13ec633ac973da403ba71b2c54`);
      const data = await res.json();

      setData(data);
    }

    fetchData();
  }, []);

  return data;
}

export default useData