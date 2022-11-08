import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Countries from "../../store/country-context";
const DetailContent = ({ country }) => {
  const ctr = useContext(Countries);
  console.log(country);
  const borders = country.borders?.map((bdr) => (
    <Link to={`/details/${bdr}`}>
      <li
        className={`shadow-lg px-5 py-3 text-center font-light ${
          ctr.theme ? "bg-darkBlue" : "bg-white"
        } cursor-pointer my-2`}
      >
        {bdr}
      </li>
    </Link>
  ));
  console.log(borders);

  return (
    <div className="flex flex-col md:grid md:justify-between md:grid-cols-2 md:grid-rows-1 space-y-5 md:space-y-0 md:space-x-10">
      <picture className="flex-1">
        <img src={country.flags.svg} arial-label={country.name} />
      </picture>
      <div className="flex-1 flex flex-col space-y-5">
        <h1 className="font-extrabold capitalize text-3xl">
          {country.name.common}
        </h1>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between md:space-x-5">
          <hgroup>
            <p className="font-semibold">
              Native Name:{" "}
              <span className="font-light">{country.nativeName}</span>
            </p>
            <p className="font-semibold">
              Population:{" "}
              <span className="font-light">{country.population}</span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-light">{country.region}</span>
            </p>
            <p className="font-semibold">
              Sub Region:{" "}
              <span className="font-light">{country.subregion}</span>
            </p>
          </hgroup>
          <hgroup>
            <p className="font-semibold">
              Top Level Domain: <span className="font-light">{""}</span>
            </p>
            <p className="font-semibold">
              Currencies:{" "}
              <span className="font-light">{country.currencies}</span>
            </p>
            <p className="font-semibold">
              Languages: <span className="font-light">{country.languages}</span>
            </p>
          </hgroup>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3  md:flex-row md:items-center">
          <p className="font-extrabold whitespace-nowrap">Border Coutries:</p>
          <ul className="list-none flex space-x-3 flex-wrap items-start">
            {!borders ? (
              <p className="font-extrabold">No Border Country</p>
            ) : (
              borders
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
