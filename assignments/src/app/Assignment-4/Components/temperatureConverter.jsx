"use client"
import { useState } from "react"


export default function TemperatureConverter()
{
    const [temp ,setTemp]= useState(0);
    const [converter ,setConverter]= useState(null)

    function handleCelsius()
    {
        setConverter(((temp - 32) * 5) / 9)
    }

    function handleFareheit ()
    {
        setConverter((temp * 9/5)+ 32)
    }


    return(
        <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        background: "#f4f4f4",
      }}>
            <div>
                <input type="Number" value={temp} onChange={(e)=>setTemp(e.target.value)}  />

                <button onClick={handleCelsius}> Celsius </button>

                <button onClick={handleFareheit}> Farenheit </button>

                <h3>Converted Temperature : {converter}</h3>
            </div>
        </main>
    )
}