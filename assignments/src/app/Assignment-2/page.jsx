import Link from "next/link";

export default function QuestionPage() {
  return (
    <main>
      <ul>
        <li>
          <Link href={"/Assignment-2/Question-1"}>Question-1</Link>
        </li>
        <li>
          <Link href={"/Assignment-2/userForm"}>Question-2</Link>
        </li>

        <li>
          <Link href={"/Assignment-2/ToDo"}>Question-3</Link>
        </li>

        <li>
          <Link href={"/Assignment-2/RandomNumber"}>Question-4</Link>
        </li>

        <li>
          <Link href={"/Assignment-2/counterWithSteps"}>Question-5</Link>
        </li>

        <li>
          <Link href={"/Assignment-2/Clock"}>Question-6</Link>
        </li>

         <li>
          <Link href={"/Assignment-2/notification"}>Question-7</Link>
        </li>
      </ul>
    </main>
  );
}
