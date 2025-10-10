import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

type StartupCardType = {
  _createdAt: string;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Adrian" },
      _id: 1,
      description: "This is a description.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tesla-optimus-bot-gen-2-scaled_%28cropped%29.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];

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
          <p className="text-xl">
            {query ? `Search results for ${query}` : "All Startups"}
          </p>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {posts?.length > 0 ? (
              posts.map((post: StartupCardType) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p>No startup found!</p>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
