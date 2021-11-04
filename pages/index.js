import Head from "next/head";
import Card from "../components/Card";
export default function Home() {
  return (
    <main className="bg-secondary  pt-10 ">
      <section className="grid grid-cols-5 gap-7 h-screen w-4/5 m-auto">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </main>
  );
}
