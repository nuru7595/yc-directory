import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section>
        <h2 className="section-title">Home</h2>
        <div className="section-container max-w-2/3 mx-auto flex flex-col gap-5 !py-12 items-center justify-center">
          <h3 className="bg-yellow-400 text-black px-2 py-1 uppercase">
            Pitch, Vote and Grow
          </h3>
          <h1 className="text-center bg-black p-2 uppercase">
            Pitch your startup,
            <br />
            connect with entrepreneurs
          </h1>
          <p>
            Submit ideas, Vote on Pitches and get noticed in Virtual
            Competitions
          </p>
          <SearchForm query={query} />
        </div>
      </section>
      <section>
        <h2 className="section-title">Menu</h2>
        <div className="section-container">
          <h4>Coming Soon...</h4>
        </div>
      </section>
    </>
  );
}
