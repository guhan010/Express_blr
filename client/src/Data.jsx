import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [data]);
  function fetchData() {
    axios
      .get("https://mobile-api-eo1w.onrender.com/mobile/samsung/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  async function deleteData(id) {
    await axios.delete(
      `https://mobile-api-eo1w.onrender.com/mobile/samsung/${id}`
    );
    fetchData();
  }
  return (
    <div>
      {data.map((ele) => (
        <li key={ele._id}>
          {ele.brand} - {ele.model} - {ele.price}{" "}
          <button onClick={() => deleteData(ele._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default Data;
