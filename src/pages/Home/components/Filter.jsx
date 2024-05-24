import { useState } from "react";
import { Link } from "react-router-dom";

const filterOptionsData = [
  { id: 0, title: "All", to: "/sorted/all" },
  { id: 1, title: "Africa", to: "/sorted/africa" },
  { id: 2, title: "America", to: "/sorted/america" },
  { id: 3, title: "Asia", to: "/sorted/asia" },
  { id: 4, title: "Europe", to: "/sorted/europe" },
  { id: 5, title: "Oceaina", to: "/sorted/oceania" },
];


export const Filter = () => {
  const [isShow, setIsShow] = useState(false);
  const [res, setRes] = useState('All');
  document.addEventListener('click',(event) => {
    setIsShow(event.target.classList.contains("fj")&&isShow)
  })

  return (
    <div className="filter fj">
      <div className="filter-text fj" onClick={() => (setIsShow(!isShow))}>
        <p className="fj">{res!='All'?res:'Filter by Region'}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
            fill="black"
          />
        </svg>
      </div>
      {isShow  && (
        <ul className="filter-option">
          {filterOptionsData.map((item) => {
            const { id, title, to } = item;
            return (
              <li key={id}>
                <Link to={to} onClick={()=>setRes(title)}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
