import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  let [data, setData] = useState([]);
  let [mobileData, setMobileData] = useState({
    brand: "",
    model: "",
    price: "",
  });
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
  function changing(e) {
    setMobileData({
      ...mobileData,
      [e.target.name]: e.target.value,
    });
  }

  async function sendData(e) {
    e.preventDefault();
    await axios.post(
      "https://mobile-api-eo1w.onrender.com/mobile/samsung/",
      mobileData
    );
    setMobileData({ brand: "", model: "", price: "" });
  }

  return (
    <div>
      {data.map((ele) => (
        <li key={ele._id}>
          {ele.brand} - {ele.model} - {ele.price}{" "}
          <button onClick={() => deleteData(ele._id)}>Delete</button>
        </li>
      ))}

      <h1>Add Mobiles</h1>
      <form onSubmit={sendData}>
        <input
          type="text"
          value={mobileData.brand}
          name="brand"
          onChange={changing}
          placeholder="enter brand name"
        />
        <input
          type="text"
          value={mobileData.model}
          name="model"
          onChange={changing}
          placeholder="enter model name"
        />
        <input
          type="text"
          value={mobileData.price}
          name="price"
          onChange={changing}
          placeholder="enter price"
        />
        <button>Add Data</button>
      </form>
    </div>
  );
};

export default Data;
