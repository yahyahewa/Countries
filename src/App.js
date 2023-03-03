import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./componet/Nav.jsx";

/////////////////////////////////////////////////////////////
function App() {
  const [countries, setCountries] = useState([]);
  async function RetriveCountry(link) {
    try {
      const fetchLink = await fetch(link);
      const Data = await fetchLink.json();
      setCountries(Data);
    } catch (error) {}
  }
  useEffect(() => {
    return () => {
      RetriveCountry("https://restcountries.com/v3.1/all");
    };
  }, []);
  return (
    <div>
      <section>
        <Nav
          onkeyup={(ex) => {
            if (ex !== "") {
              RetriveCountry(`https://restcountries.com/v3.1/name/${ex}`);
            }
          }}
          click={(e) => {
            RetriveCountry(`https://restcountries.com/v3.1/region/${e}`);
          }}
        />
        {countries.length > 0 &&
          countries.map((value) => {
            return (
              <article key={value.area + value.name.common}>
                <div className="img-div">
                  <img src={value.flags.svg} alt={value.flags.alt} />
                </div>
                <div className="text-div">
                  <h4>{value.name.official}</h4>
                  <h5>Name: {value.name.common}</h5>
                  <span>Capital: {value.capital}</span>
                  <span>Continent: {value.region}</span>
                </div>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default App;
