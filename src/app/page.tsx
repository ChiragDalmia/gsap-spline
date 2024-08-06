import Model from "@/components/Model";

export default function Home() {
  return (
    <main className="">
      <Model />
      <header>
        Hackathons Canada <br /> 2025
      </header>
      <section className="sectionRight" id="about">
        About
      </section>
      <section className="sectionLeft" id="sponsors">
        Sponsors & Partners
      </section>
      <section className="sectionRight" id="joinDiscord">
        Join Discord
      </section>
      <section className="sectionLeft" id="faq">
        FAQ
      </section>
      <section className="sectionRight" id="location">
        Location
      </section>
      <footer>Footer</footer>
    </main>
  );
}
