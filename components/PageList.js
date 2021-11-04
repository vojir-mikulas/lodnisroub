import Link from "next/link";

export default function PageList() {
  return (
    <nav className=" chapters-list-fixed bg-primary  h-screen w-2/5  fixed z-0   mt-20 overflow-y-scroll overflow-x-hidden   flex flex-col top-0 left-0">
      <Link href="xd/xd">
        <a className="px-6 py-3 hover:bg-secondary hover:scale-105 transition-all text-text text-center font-bold ">
          staticke objekty
        </a>
      </Link>
    </nav>
  );
}
