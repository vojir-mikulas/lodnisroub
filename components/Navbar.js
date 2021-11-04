import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary h-20 flex justify-center items-center  shadow-lg drop-shadow-lg">
      <Link href="/">
        <a>
          {" "}
          <h1 className="text-pink-800 font-bold text-4xl">LODNÍ ŠROUB.</h1>
        </a>
      </Link>
    </nav>
  );
}
