import "./App.css";
import Nav from "./componet/Nav.jsx";
import useFetch from "./hooks/useFetch.js";

/////////////////////////////////////////////////////////////
function App() {
  const [data, error, loading] = useFetch("https://restcountries.com/v3.1/all");
  if (data) {
    return (
      <section>
        <Nav
          onkeyup={(ex) => {
            if (ex !== "") {
              // useFetch(`https://restcountries.com/v3.1/name/${ex}`);
            }
          }}
          click={(e) => {
            // useFetch(`https://restcountries.com/v3.1/region/${e}`);
          }}
        />
        {data.length > 0 &&
          data.map((value) => {
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
    );
  } else if (error) {
    return <section>{error}</section>;
  } else if (loading) {
    return <section>lodiang .....</section>;
  }
}

export default App;
