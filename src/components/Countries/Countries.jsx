import Country from "./Country";
import { useGetCountryQuery } from "../../api/countryApiSlice";
import { useSelector } from "react-redux";
const Countries = () => {
  const filters = useSelector((state) => state.filters);
  const { data, isLoading, isError, error } = useGetCountryQuery(
    `${filters.regionFilter ? `region/${filters.regionFilter}` : `all`}`
  );

  let content;

  if (isLoading) {
    content = (
      <section className="h-3/5 flex justify-center items-center">
        <span className="loader"></span>
      </section>
    );
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else if (data) {
    const filterdCountry = data.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(filters.countryFilter.trim()) ||
        country.name.official
          .toLowerCase()
          .includes(filters.countryFilter.trim())
    );
    content = (
      <section className="flex flex-row items-center justify-center flex-wrap  py-5  px-14 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:px-3 md:gap-8 lg:grid-cols-4 md:justify-center md:items-stretch">
        <Country isLoading={isLoading} country={filterdCountry} />
      </section>
    );
  }

  return <>{content}</>;
};

export default Countries;
