import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const [getName, setName] = useState({ name: "" });
  console.log(getName);

  const { id } = useParams();

  const handleChage = (e) => {
    const { name, value } = e.target;
    const data = { ...getName, [name]: value };
    setName(data);
  };

  const getNames = async () => {
    try {
      const data = await axios.get(`/api/v1/crud/${id}`);
      setName({ name: data.data.todo.name });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNames();
  }, []);
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.patch(`/api/v1/crud/${id}`, { ...getName });
    } catch (err) {
      console.log(err);
    }

    console.log("Working");
  };
  return (
    <div>
      <form action="PATCH">
        <input
          type="text"
          value={getName.name}
          name="name"
          onChange={handleChage}
        />

        <button type="submit" onClick={hanldeSubmit}>
          <Link to="/">Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default Edit;
