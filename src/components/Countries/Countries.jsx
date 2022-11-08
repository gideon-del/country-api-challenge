import React, { useContext } from "react";
import Country from "./Country";
import CtrContry from "../../store/country-context";
const Countries = () => {
  // const [country,setCountry] = useState([]);
  //  const [isLoading,setislLoading] = useState(false)
  const cotr = useContext(CtrContry);
  let content = (
    <section className="h-3/5 flex justify-center items-center">
      <span className="loader"></span>
    </section>
  );
  const filterdCountry = cotr.data.filter(
    (country) =>
      country.name.common.toLowerCase().includes(cotr.countryFilter.trim()) ||
      country.officialName.toLowerCase().includes(cotr.countryFilter.trim())
  );
  console.log(filterdCountry);
  if (!cotr.isLoading) {
    content = (
      <section className="flex flex-row items-center justify-center flex-wrap  py-5  px-14 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:px-3 md:gap-8 lg:grid-cols-4 md:justify-center md:items-stretch">
        <Country isLoading={cotr.isLoading} country={filterdCountry} />
      </section>
    );
  }

  return <>{content}</>;
};

export default Countries;
