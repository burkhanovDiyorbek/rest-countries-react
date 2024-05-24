import { Link, useParams } from "react-router-dom";
import { Filter } from "../Filter";
import { Search } from "../Search";
import { Card } from "../Card";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CardSkleton } from "../CardSkleton";

export const Sorted = () => {
  // console.log(value);
  const px = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [dataArr, setDataArr] = useState([]);
  const [pagenation, setPagenation] = useState(8);
  const queryParameters = new URLSearchParams(window.location.search);
  const value = queryParameters.get("q");
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/${
        px.region == "all" ? "all" : "region/" + px.region
      }`
    )
      .then((data) => data.json())
      .then(
        (data) => (
          setDataArr(
            value?.length > 1
              ? data.filter((item) =>
                  item.name.common.toLowerCase().includes(value?.toLowerCase())
                )
              : data
          ),
          setIsLoading(false)
        )
      );
  }, [px.region, value]);

  // useEffect(() => {
  //   setDataArr(
  //     dataArr
  //   );
  // }, [value]);
  return (
    <>
      <div className="container">
        <Search />
        <Filter />
      </div>
      <div className="card-container">
        {isLoading && <CardSkleton cards={pagenation} />}
        {dataArr.map((item, index) => {
          if (index < pagenation) {
            const { name, region, population, capital, flags } = item;
            return (
              <Link to={`/country/${name.common}`} key={name.common}>
                <Card
                  name={name.common}
                  region={region}
                  population={population}
                  capital={capital}
                  flags={flags.png}
                />
              </Link>
            );
          }
        })}
        {!isLoading && !(dataArr.length > 0) && <p>Nothing to see...</p>}
      </div>
        {!isLoading&&dataArr.length>pagenation&&<button onClick={()=>setPagenation(pagenation=>pagenation+4)} className="pagination">Load more</button>}
    </>
  );
};

Sorted.propTypes = {
  value: PropTypes.string,
};
