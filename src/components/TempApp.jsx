import React, { useEffect, useState } from "react";


// const TempApp = () => {
//     const [cityWeather, setCityWeather] = useState(null);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         const fetchWeather = async () => {
//             const API_KEY = "f8d0459764a8d53ac96ae14ca3993acb";
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;

//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();

//                 if (response.ok) {
//                     setCityWeather(data);
//                 } else {
//                     setCityWeather(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setCityWeather(null);
//             }
//         };

//         if (search) {
//             fetchWeather();
//         }
//     }, [search]);

//     const inputEvent = (e) => {
//         setSearch(e.target.value);
//     };

//     return (
//         <div className="main">
//             <div className="main-c">
//                 <div className="inputField">
//                     <input type="search" name="search" id="searchfield" onChange={inputEvent} />
//                 </div>

//                 {cityWeather !== null ? (
//                     <div>
//                         <div className="p-info">
//                             <i className="fa-solid fa-street-view"></i>
//                             <h2>{search}</h2>
//                         </div>
//                         <div className="t-info">
//                             <h1>{cityWeather.main.temp} °C</h1>
//                             <h3>Min {cityWeather.main.temp_min} °C | Max {cityWeather.main.temp_max} °C</h3>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>City not found</p>
//                 )}
//             </div>
//         </div>
//     );
// };



const TempApp = () => {


    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lahore");

    useEffect(() => {
        const fetchApi = async () => {
            const API_KEY = `f8d0459764a8d53ac96ae14ca3993acb`;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
            let resApi = await fetch(url);
            let jsonApi = await resApi.json();
            setCity(jsonApi.main);
        }
        fetchApi();
    }, [search])


    return (
        <>
            <div className="main">
                <div className="main-c">
                    <div className="inputField">
                        <input type="search" name="search" id="searchfield" placeholder="Search" onChange={(e) => {
                            setSearch(e.target.value)

                        }} />
                    </div>

                    {city && <div>
                        <div className="p-info">
                            <i className="fa-solid fa-street-view"></i>
                            <h2>{search}</h2>
                        </div>
                        <div className="t-info">
                            <h1>{city.temp} °C</h1>

                        </div>
                    </div>
                    }

                </div>
            </div>
        </>
    )
}

export default TempApp;