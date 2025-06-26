import Link from "next/link";

export default function QuestionPage() {
  return (
    <main>
      <ul>
        <li
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <Link href={"/Assignment-3/UserAuthentication"}>
            User Authentication
          </Link>
        </li>

        <li
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <Link href={"/Assignment-3/AuthenticationAndTheme"}>
            User Authentication with Theme Prefrenece
          </Link>
        </li>

        <li
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <Link href={"/Assignment-3/Question-3-4"}>
            User Authentication with Theme Prefrenece
          </Link>
        </li>
      </ul>
    </main>
  );
}
