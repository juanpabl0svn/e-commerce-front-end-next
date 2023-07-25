import Landing from "@/components/landing";

export default async function Home() {
   const get = await fetch('http://localhost:3000')
   const res = await get.json()

  return (
    <main className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 w-full h-full py-5 px-3 bg-slate-300">
      <Landing products={res} />
    </main>
  );
}
