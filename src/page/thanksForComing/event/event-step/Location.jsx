import { useEffect, useState } from "react"
// import { getCountryState } from "./data";
import { CgSpinner } from "react-icons/cg";

const Location = ({formData, setFormData, handleInputChange}) => {
    const [countries, setCountries] = useState(null)
    const [states, setState] = useState([])
    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const sortedCountries = data.sort((a, b) => 
              a.name.common.localeCompare(b.name.common)
            );
            setCountries(sortedCountries);
            console.log('sorted -->',sortedCountries)
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        };
    
        fetchCountries();
      }, []);

      useEffect(()=>{
        const fetchState = async () =>{
          setLoadingState(true)
          try {
            const response = await fetch(
              `https://countriesnow.space/api/v0.1/countries/states`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ country: formData?.country}) // Convert object to JSON string
              }
            );
        
            if (response.error) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log('response -->',data);             
            setState(data.data.states);
          } catch (error) {
            console.error("Error fetching states:", error);
            return [];
          }finally{
            setLoadingState(false)
          }
        }
        fetchState()
      },[formData?.country])

  return (

    <div>
        <h1 className="font-semibold">Location</h1>
        <p>Let get a full description of where it is going to happen</p>
        <div className="mt-3">
            <h1 className="font-thin text-lg text-neutral-700">Country</h1>
            <select onChange={handleInputChange} name="country" className="w-full p-2 border-2 border-main_200 text-main_600">
                {
                    countries?.map((eachCountry, index)=>{
                        return(
                            <option key={index}>
                                {eachCountry?.name?.common}
                            </option>
                        )
                        // console.log(eachCountry.name.common)
                    })
                }
            </select>
        </div>

        <div className="mt-3">
            <h1 className="font-thin text-lg text-neutral-700">state</h1>
            {
              states.length ? 
              <select onChange={handleInputChange} name="state" className="w-full p-2 border-2 border-main_200 text-main_600">
                {
                    states?.map((eachCountry, index)=>{
                        return(
                            <option key={index}>
                                {eachCountry?.name}
                            </option>
                        )
                        // console.log(eachCountry.name.common)
                    })
                }
            </select>
              : null
            }
            {
              loadingState ? 
              <div className="w-10 h-10 object-cover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#000000"></stop><stop offset=".3" stop-color="#000000" stop-opacity=".9"></stop><stop offset=".6" stop-color="#000000" stop-opacity=".6"></stop><stop offset=".8" stop-color="#000000" stop-opacity=".3"></stop><stop offset="1" stop-color="#000000" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="5" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#000000" stroke-width="5" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
              </div>
              : null
            }
        </div>
        <div className="mt-3">
          <h1 className="font-thin text-lg text-neutral-700">Address</h1>
          <input className="w-full p-2 border-2 border-main_200 text-main_600" type="text" name="address" id="address" placeholder="Block 12b united, london"/>
        </div>
    </div>
  )
}

export default Location