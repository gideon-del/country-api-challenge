import React, { useCallback, useEffect, useState } from "react";
import Country from "./country-context";
const CountryProvider = (props) => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterdRegion, setFilterdRegion] = useState("");
  const [toggle, setToggle] = useState(localStorage.getItem("theme") ?? false);
  const [countryFilter, setCountryFilter] = useState("");
  localStorage.setItem("theme", toggle);
  // const [currentTheme,setCurrentTheme] = useState(true);
  const fetchCountry = useCallback(
    async (url = "https://restcountries.com/v3.1/all") => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error("something is wrong");

        setCountry(
          data.map((ctr) => {
            return {
              ...ctr,
              officialName: ctr.name.official,
              population: ctr.population,
              region: ctr.region,
              capital: ctr.capital,
              flag: ctr.flags.svg,
              id: ctr.area,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    if (filterdRegion !== "") {
      fetchCountry(
        `https://restcountries.com/v3.1/region/${filterdRegion.toLocaleLowerCase()}`
      );
      return;
    }
    fetchCountry();
  }, [fetchCountry, filterdRegion]);
  const filter = (val) => {
    setFilterdRegion(val);
  };
  const toggleTheme = () => {
    setToggle((prev) => !prev);
  };
  const addCountryFilter = (val) => {
    setCountryFilter(val.toLowerCase());
  };

  return (
    <Country.Provider
      value={{
        data: country,
        current: [],
        isLoading,
        filter,
        theme: toggle,
        toggleTheme,
        countryFilter,
        addCountryFilter,
      }}
    >
      {props.children}
    </Country.Provider>
  );
};

export default CountryProvider;
