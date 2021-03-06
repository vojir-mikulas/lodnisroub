import Link from "next/link";
//TODO: Hrefy u linků jsou statický
export default function Card() {
  return (
    <article className="bg-primary card rounded-3xl shadow-lg flex flex-col   ">
      <header
        style={{
          backgroundImage: `url(xd.png)`,
        }}
        className="bg-blue-900 h-2/6 rounded-t-3xl  flex-shrink-0 flex-grow-0 bg-cover bg-center"
      ></header>
      <main className="text-text text-lg text-center h-auto flex-grow  flex-shrink mt-6 px-4">
        <Link href="xd">
          <a>
            <h1 className="font-bold text-3xl hover:text-pink-800 transition-all">
              Pogramko
            </h1>
          </a>
        </Link>
        <p>Pavel Foltýn naučil velkou píču? Základy pogramka k maturitě</p>
      </main>
      <footer className="bg-pink-800 h-1/6 rounded-b-3xl flex-shrink-0 flex-grow-0 flex justify-center items-center hover:bg-pink-900 transition-all">
        <Link href="xd">
          <a className="font-bold text-2xl text-white text-center">START</a>
        </Link>
      </footer>
    </article>
  );
}
