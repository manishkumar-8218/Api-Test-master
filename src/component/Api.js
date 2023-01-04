import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ApiData = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-div">
      {users.map((data) => {
        return (
          <div key={data.show.id} className="div-card">
            <h1 className="name">{data.show.name}</h1>

            {data.show.image && (
              <img src={data.show.image.medium} alt={data.show.name} />
            )}
            <h4 className="id">{data.show.id}</h4>
            <h2 className="type">{data.show.type}</h2>
            <h3 className="language">{data.show.language}</h3>
            <button className="btn">
              <Link className="demo" to="/summary" state={data.show.summary}>
                Summary
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ApiData;
