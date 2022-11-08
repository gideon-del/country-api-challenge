import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailContent from "../components/DetailContent/DetailContent";
import Header from "../components/Header/Header";
import Countries from "../store/country-context";
import { KeyboardBackspace } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoadig] = useState(true);
  const [error, setError] = useState();
  const ctr = useContext(Countries);
  const location = useLocation();
  const country = location.pathname.split("/")[2];
  let content;
  console.log(location.pathname);
  useEffect(() => {
    setIsLoadig(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${country}`
        );
        const data = await res.json();
        console.log(data);
        const nativeName = Object.keys(data[0].name.nativeName)
          .map((names) => data[0].name.nativeName[names].common)
          .join(", ");

        const currencies = Object.keys(data[0].currencies)
          .map((cur) => data[0].currencies[cur].name)
          .join(", ");
        const languages = Object.values(data[0].languages).join(", ");
        const transformedData = {
          ...data[0],
          nativeName,
          currencies,
          languages,
        };

        setData(transformedData);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setIsLoadig(false);
    };
    fetchData();
  }, [country]);
  if (isLoading) {
    content = (
      <section className="flex justify-center items-center w-full">
        <span className="loader"></span>
      </section>
    );
  }
  if (error) {
    content = (
      <section>
        <p className="text-red-600">{error}</p>
      </section>
    );
  }
  if (!error && !isLoading) {
    content = <DetailContent country={data} />;
  }
  return (
    <>
      <Header />
      <section
        className={`pb6 ${
          ctr.theme ? "text-white" : "text-veryDarkBlueL"
        } py-7`}
      >
        <div className="flex flex-col items-start px-10 mx-auto space-y-6 font-nunitoSans  lg:max-w-6xl">
          <div
            className={`py-2 px-7 shadow-lg font-nunitoSans font-extrabold flex items-center ${
              ctr.theme ? "bg-darkBlue" : "bg-white"
            }`}
          >
            <Link to="/">
              <span>
                <KeyboardBackspace /> Back{" "}
              </span>
            </Link>
          </div>
          {content}
        </div>
      </section>
    </>
  );
};

export default Details;
