import { CUISINES, PLACESNEARME } from "../data";
import Details from "./Details";

export default function Explore() {
  const summary = "Popular cuisines near me";
  const head1 = "Popular restaurant types near me";

  return (
    <>
      <section className="ml-44">
        <h1 className="text-3xl mt-16">Explore options near me</h1>
        <Details heads={summary} cuisines={CUISINES} />
        <Details heads={head1} cuisines={PLACESNEARME} />
      </section>
    </>
  );
}
