import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./RepositoryDetails.css"

const RepositoryDetails = () => {
  const [repositoryDetail, setRepositoryDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name } = useParams();
  const handlerFetchData = async () => {
    setLoading(true);
    try {
      const result = await axios(`https://api.github.com/repos/Ibom99/${name}`);

      setRepositoryDetail(result?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    handlerFetchData();
  }, []);
  console.log(repositoryDetail);
  return (
    <div>
      <Navigation />
      <h1 className="details-title">Repository Details</h1>
      <div className="details">
      {loading ? (
        <p className="loader"><div class="loadingio-spinner-dual-ring-e14uxtnme7k"><div class="ldio-65do8wql8wu">
        <div></div><div><div></div></div>
        </div></div></p>
      ) : (
        <div>
          {" "}
          <a className="repo-link" href={repositoryDetail?.html_url} target="_blank">
            {repositoryDetail?.full_name}
          </a>
          <p>
            {" "}
            <b>Repository Description:</b>{" "}
            {repositoryDetail?.description ? (
              repositoryDetail?.description
            ) : (
              <span>(no description present)</span>
            )}
          </p>
          <p>
            {" "}
            <b>Language:</b>{" "}
            {repositoryDetail?.language ? (
              repositoryDetail?.language
            ) : (
              <span>(language used not identified)</span>
            )}
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default RepositoryDetails;
