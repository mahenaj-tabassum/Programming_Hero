import { use, useState } from "react";
import type { CountryType } from "../type";
import Country from "./Country/Country";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}
const Countries = ({ countriesPromise }: CountriesProps) => {
  const countries = use(countriesPromise);
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

  const handleVisitedCountries = (country: CountryType): void => {
    // Bad way to check object/array check
    // if (visitedCountries.includes(country)) {
    //   const remainingCountries = countries.filter(c => c !== country)

    //   setVisitedCountries(remainingCountries)
    // } else {
    //   const newVisitedCountries = [...visitedCountries, country];
    //   setVisitedCountries(newVisitedCountries);
    // }

    // Good way to check
    const exists = visitedCountries.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3,
    );
    if (exists) {
      const remainingCountries = visitedCountries.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3,
      );
      setVisitedCountries(remainingCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);
  const handleVisitedFlag = (flag: string): void => {
    console.log("Flag visited:", flag);
    if (visitedFlags.includes(flag)) {
      const remainingFlags = visitedFlags.filter((f) => f !== flag);
      setVisitedFlags(remainingFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <h4>Visited Flags: {visitedFlags.length}</h4>
      <div>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.ccn3.ccn3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div>
        {visitedFlags.map((flag) => (
          <img src={flag} />
        ))}
      </div>
      {/* <h1>Countries: {countries.map((country)=> country.name.common)}</h1> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
