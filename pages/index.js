import Guide from "/components/guide";

export default function Home() {
  return (
    <>
      <div className="layout">
        <h1>V60 Recipe</h1>
        <Guide />

        <a href="https://read.cv/nathan" className="note">
          Made by @nathan
        </a>
      </div>
    </>
  );
}
