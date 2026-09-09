import { Suspense } from "react";
import type { CountryType } from "./type";
import Countries from "./components/Countries";


// Step 1: create a Promise to load data 
const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await response.json();
  return data.countries;
};

const App = () => {
  return (
    <div>
      <h2>World to go</h2>
      <Suspense fallback="Loading...">
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </div>
  );
};

export default App;
