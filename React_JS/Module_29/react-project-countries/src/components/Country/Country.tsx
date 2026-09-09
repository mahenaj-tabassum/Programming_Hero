import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountries: (country:CountryType) => void
  handleVisitedFlag: (flag: string) => void
}
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }: CountryProps) => {
  const [visited, setVisited] = useState<boolean>(false);
  const handleVisited = () => {
    // if(visited === false){
    //     setVisited(true)
    // }else{
    //     setVisited(false)
    // }
    setVisited(!visited)
    handleVisitedCountries(country)
   
  };
  return (
    <div className="country-card">
      <h3>Name: {country.name.common} </h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

      <p>Population: {country.population.population} </p>
      <p>Capital: {country.capital.capital} </p>
      <button
        className={`visited-btn ${visited ? "visited-btn" : "mark-visited-btn"}`}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Mark As Visited"}
      </button>
      <button onClick={()=>{
        handleVisitedFlag(country.flags.flags.png)
      }}>Add Flag as Visited</button>
    </div>
  );
};

export default Country;
