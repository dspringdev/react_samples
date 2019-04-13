import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    // Must use async inside of useEffect
    const fetchData = async () => {
      const result = await axios(
        "http://hn.algolia.com/api/v1/search?query=redux"
      );
      console.log(result);
      setData(result.data);
    };

    fetchData();
  }, []); // Use empty array here to fetch data only on mounting

  return (
    <React.Fragment>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
