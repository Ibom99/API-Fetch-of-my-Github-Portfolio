import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./MyRepos.css"

export default function MyRepos(props) {
  const { repos } = props;
  const [page, setPage] = useState(1);
  // const [currentPage, setCurrentPage] = useState(null)

  const pages = 3;

  const firstPage = repos?.data?.filter((item, index) => index < 4 );
  const secondPage = repos?.data?.filter((item, index) => index >= 4 && index < 8 );
  const thirdPage = repos?.data?.filter((item, index) => index >= 8 && index < 10);

  // console.log(firstPage);
  // // console.log(repos);
  // console.log(currentPage)

  let repoList ;

  const listOfRepos = page === 1
      ? firstPage
      : page === 2
      ? secondPage
      : page === 3
      && thirdPage;

      // useEffect(() => {
      //  listOfRepos()
      // }, [repos])

  // const listOfRepos = repos.length !== 0 ? repos.data.map((item) => <li key={item.id}>{item.name}: {item.description}</li>) : null ;
  return (
    <div className="repos-container">
      
        {repos?.length !== 0 ? (
          listOfRepos?.map((item, index) => 
            
            {return <div className="reposlist">
               <Link className="repoNames" to={`/repositoryList/repositoryDetails/${item.name}`} key={item.id}>
             {1 + index}. {item.name}
            </Link>
            </div>
})
        ) : (
          <p className="loader"> <div class="loadingio-spinner-dual-ring-e14uxtnme7k"><div class="ldio-65do8wql8wu">
          <div></div><div><div></div></div>
          </div></div></p>
        )}
    

      <Outlet />
      <p className="pagination">
        PAGE: {page} / {pages}
      </p>

      <div className="buttons-container">
        {
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            PREV
          </button>
        }

        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            NEXT
          </button>
        }

        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (item) => (
            <button onClick={() => setPage(item)}>{item}</button>
          )
        )}
      </div>
    </div>
  );
}
