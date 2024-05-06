import React, { useEffect } from "react";
import axios from "axios";

const Data = () => {
  useEffect(() => {
    axios
      .get("https://mobile-api-eo1w.onrender.com/mobile/samsung/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return <div>Data</div>;
};

export default Data;
