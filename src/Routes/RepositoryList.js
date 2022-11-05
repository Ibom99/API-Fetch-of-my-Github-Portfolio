import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MyRepos from "../components/MyRepos";
import Navigation from "../components/Navigation";
import "./RepositoryList.css"

export default function RepositoryList() {
  const [repos, setRepos] = useState([]);

  const handlerFetchData = async () => {
    try {
      const result = await axios("https://api.github.com/users/Ibom99/repos");

      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handlerFetchData();
  }, []);

  return (
    <div className="repositorylist-container">
      <Navigation />
      <h1 className="title">Github Repository List</h1>
      {/* <button onClick={handlerFetchData}>Display Repository</button> */}

      <div className="repos">
        <MyRepos repos={repos} />
      </div>
    </div>
  );
}
