import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary h-20 flex justify-center  w-full  z-50 items-center  shadow-lg drop-shadow-lg  fixed top-0 left-0">
      <Link href="/">
        <a>
          {" "}
          <h1 className="text-pink-800 font-bold text-4xl">LODNÍ ŠROUB.</h1>
        </a>
      </Link>
    </nav>
  );
}
