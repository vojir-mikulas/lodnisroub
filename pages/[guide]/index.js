import Link from "next/link";

export default function Guide() {
  return (
    <main className="flex mt-20 bg-secondary h-screen">
      <Link href="xd/xd">
        <a> staticke objekty</a>
      </Link>
      <Link href="xd/xd">
        <a> staticke ne</a>
      </Link>
    </main>
  );
}
