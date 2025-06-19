import Link from "next/link";

// "use client";

// import Greeting from "../components/Question-1";
// import UserCard from "@/components/Question-2";
// import Weather from "@/components/Question-3";

// export default function Home() {
//   return (

//     <div>
//       <div>
//         <h4>Question-1</h4> <br></br>
//         <Greeting />
//       </div>

//       <div>
//         <h4>Question-2</h4> <br></br>
//       <UserCard
//         avatar="/images/avatar.png"
//         name="Geetanjali Nayak"
//         email="geetanjali@gmail.com"
//       />
//       <UserCard
//         avatar="/images/avatar.png"
//         name="John"
//         email="john@gmail.com"
//       />
//       <UserCard
//         avatar="/images/avatar.png"
//         name="Mike"
//         email="Mike@gmail.com"
//       />
//       </div>

//       <div>
//         <h4>Question-3</h4> <br></br>
//         <Weather temperature={30}/>

//       </div>

//     </div>
//   );
// }

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/questions/question-1">Question-1</Link>
      </li>

      <li>
        <Link href="/questions/question-2">Question-2</Link>
      </li>

      <li>
        <Link href="questions/question-3">Question-3</Link>
      </li>

      <li>
        <Link href="questions/question-4">Question-4</Link>
      </li>

      <li>
        <Link href="questions/question-5">Question-5</Link>
      </li>

       <li>
        <Link href="questions/question-6">Question-6</Link>
      </li>
    </ul>
  );
}
