import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https:fakestoreapi.com/products");
      setCount(data.data);
    };

    getData();
  }, []);

  console.log(count);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;
