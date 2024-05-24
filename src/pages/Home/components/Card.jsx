import PropTypes from "prop-types";

export const Card = ({ flags,name,population, region,capital}) => {
  return (
    <div className="card" key={name}>
      <img src={flags} alt="img" />
      <h2>{name}</h2>
      <ul>
        <li>
          <b>Population:</b>
          <p>{population}</p>
        </li>
        <li>
          <b>Region:</b>
          <p>{region}</p>
        </li>
        <li>
          <b>Capital:</b>
          <p>{capital}</p>
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  flags: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.array,
};
