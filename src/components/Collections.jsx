import { COLLECTIONS } from "../data";
import Collection from "./Collection";
export default function Collections() {
  return (
    <>
      <section className="mt-24">
        <p className="text-4xl font-normal ml-44 mb-1">Collections</p>
        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-x-52">
            <p className="font-light">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Vijayawada, based on trends
            </p>
            <a href="" className="decoration-none text-red-600 font-light">
              All Collections in Vijayawada{" "}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {COLLECTIONS.map((items) => (
              <Collection key={items.title} {...items} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
