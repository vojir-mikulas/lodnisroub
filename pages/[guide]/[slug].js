import Link from "next/link";
import PageList from "../../components/PageList";
export default function Page() {
  return (
    <main className="bg-secondary     p-4 mt-20">
      <PageList />
      {
        //TODO implementovat .md compiler
      }
      <article className="page-article h-screen">CHAPTERS</article>
    </main>
  );
}
