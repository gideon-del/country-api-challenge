import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import theme from "../../toggle/Toggle";
const Country = ({ country }) => {
  const filters = useSelector((state) => state.filters);
  let current = "light";
  if (filters.dark) {
    current = "dark";
  }

  let content = country.map((ctr) => {
    return (
      <Link to={`details/${ctr.cioc ?? ctr.cca2}`}>
        <section
          className={`${theme.general.card.main} ${theme[current].card.main}`}
          key={ctr.cca2}
        >
          <img
            src={ctr.flags.svg}
            alt={ctr.name.common}
            className="w-full h-52 self-stretch"
          />
          <div
            className={`${theme.general.card.text} ${theme[current].card.text}`}
          >
            <h2 className="font-extrabold mb-4 text-lg">{ctr.name.official}</h2>
            <p className="font-semibold">
              Population: <span className="font-light">{ctr.population}</span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-light">{ctr.region}</span>
            </p>
            <p className="font-semibold">
              Capital: <span className="font-light">{ctr.capital}</span>
            </p>
          </div>
        </section>
      </Link>
    );
  });

  return <>{content}</>;
};

export default Country;
