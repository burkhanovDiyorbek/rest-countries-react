import { Filter } from "./components/Filter";
import { Search } from "./components/Search";
import "./home.css";
export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home-top">
          <Search />
          <Filter />
        </div>
      </div>
    </section>
  );
};
