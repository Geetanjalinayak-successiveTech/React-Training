"use client";

import { useRouter } from "next/navigation";
import Sidebar from "./Components/Drawer-MUI";

export default function Home() {
  const router = useRouter();
  return (
    
    <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}>

        <div style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
        }}>
      <button onClick={() => router.push("/Assignment-4/Input-Field")}>
        {" "}
        Input Field{" "}
      </button>

      <button onClick={() => router.push("/Assignment-4/Form")}> Form </button>

      <button onClick={() => router.push("/Assignment-4/inputWithDisplay")}>
        {" "}
        Dispaly Message{" "}
      </button>

      <button onClick={() => router.push("/Assignment-4/password")}>
        {" "}
        Verify Password{" "}
      </button>

      <button onClick={() => router.push("/Assignment-4/ToDo")}>
        {" "}
        To Do{" "}
      </button>

        <button onClick={() => router.push("/Assignment-4/SearchFilter")}>
        {" "}
        Search Filter{" "}
      </button>

       <button onClick={() => router.push("/Assignment-4/TemperatureConverter")}>
        {" "}
        Temperature Converter{" "}
      </button>

        <button onClick={() => router.push("/Assignment-4/Form-Validation")}>
        {" "}
       Form Validation{" "}
      </button>

      <button onClick={() => router.push("/Assignment-4/Modal-Dialog")}>
        {" "}
       Modal Dialog{" "}
      </button>

      

      </div>

    </main>
  );
}
