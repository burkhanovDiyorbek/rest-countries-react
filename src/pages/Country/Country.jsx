import { Link, useParams } from "react-router-dom";
import "./country.css";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
// import { CountrySkleton } from "./CountrySkleton";

export const Country = () => {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const { country } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country?.toLowerCase()}`)
      .then((data) => data.json())
      .then(
        (data) => setData(data),
        // setTimeout(() => setIsLoading(false), 500)
      );
  }, [country]);
  return (
    <div>
      {data.map((item) => {
        const {
          flags,
          name,
          borders,
          population,
          region,
          capital,
          subregion,
          tld,
          currencies,
          languages,
        } = item;
        console.log(tld, currencies, languages);
        return (
          <div className="country-container" key={item}>
            <Link to={"/sorted/all"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                  fill="#111517"
                />
              </svg>
              <p>Back</p>
            </Link>
            {/* {isLoading && <CountrySkleton />} */}
            <div className="country-information">
              {<img src={flags.png} alt="flag" className="img" /> || (
                <Skeleton />
              )}
              <div className="informartion-content">
                <h2>{name.common || <Skeleton />}</h2>
                <div className="uls">
                  <ul>
                    <li>
                      <b>Native Name:</b>
                      <p>{name.official || <Skeleton />}</p>
                    </li>
                    <li>
                      <b>Population:</b>
                      <p>{population}</p>
                    </li>
                    <li>
                      <b>Region:</b>
                      <p>{region}</p>
                    </li>
                    <li>
                      <b>Sub Region:</b>
                      <p>{subregion}</p>
                    </li>
                    <li>
                      <b>Capital:</b>
                      <p>{capital}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <b>Top Level Domain:</b>
                      <p>{tld[0]}</p>
                    </li>
                    <li>
                      <b>Currencies:</b>
                      <p>
                        {Object.keys(currencies).map((item, index, arr) => {
                          return (
                            <span key={index}>
                              {index < arr.length - 1 ? item + ", " : item}{" "}
                            </span>
                          );
                        })}
                      </p>
                    </li>
                    <li>
                      <b>Languages:</b>
                      <p>
                        {Object.values(languages).map((item, index, arr) => {
                          return (
                            <span key={index}>
                              {index < arr.length - 1 ? item + ", " : item}{" "}
                            </span>
                          );
                        })}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="borders">
                  <b>Border Countries:</b>
                  <div className="borders-btn">
                    {borders?.map((item, index) => {
                      return <button key={index}>{item}</button>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            )
          </div>
        );
      })}
    </div>
  );
};
