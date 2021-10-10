import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [postData, setPostData] = useState({ name: "" });
  const [getMyData, setGetData] = useState([]);
  const [isSubmited, setSubmit] = useState(true);

  const getData = async () => {
    try {
      const data = await axios.get("/api/v1/crud");
      const newData = data.data.todo;
      setGetData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [isSubmited]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const myData = { ...postData, [name]: value };
    setPostData(myData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPostData({ name: "" });
    try {
      const data = await axios.post("/api/v1/crud", { ...postData });
      setSubmit(!isSubmited);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`/api/v1/crud/${id}`);
      setSubmit(!isSubmited);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={postData.name}
        />
        <input type="submit" />
      </form>

      {getMyData.map((data) => {
        const { _id, name } = data;
        return (
          <div key={_id}>
            <h2>{name}</h2>
            <Link to={`/edit/${_id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
