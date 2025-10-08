import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <section>
      <h2 className="section-title">Home</h2>
      <Hero />
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
