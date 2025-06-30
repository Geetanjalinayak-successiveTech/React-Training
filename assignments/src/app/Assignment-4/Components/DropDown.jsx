"use client"
import { useState } from "react"



export default function DropDown()
{
    const [select,useSelect]= useState("");
    function handleClick()
    {
        document.getElementById("drpdwn").classList.toggle()
    }


    return(
        <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}>
            <h1 id="drpdwn">DropDown Select</h1>

            <div>
                <button onClick={handleClick}>Dropdown</button>

            </div>
        </main>
    )
}