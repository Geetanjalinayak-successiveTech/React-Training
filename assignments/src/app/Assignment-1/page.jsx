import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}
      >
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
          <Link href="/Assignment-1/question-1">Question-1</Link>
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
          }}>
          <Link href="/Assignment-1/question-2">Question-2</Link>
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
          }}>
          <Link href="/Assignment-1/question-3">Question-3</Link>
        </li>

        <li style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}>
          <Link href="/Assignment-1/question-4">Question-4</Link>
        </li>

        <li style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}>
          <Link href="/Assignment-1/question-5">Question-5</Link>
        </li>

        <li style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}>
          <Link href="/Assignment-1/question-6">Question-6</Link>
        </li>
      </ul>
    </main>
  );
}
