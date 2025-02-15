import { LOCATIONS } from "../data";
export default function Localitie() {
  return (
    <>
      <section className="mt-24">
        <p className="text-4xl font-light ml-44 mb-1">
          Popular localities in and around{" "}
          <span className="font-normal">Vijayawada</span>
        </p>
        <div className="ml-40 flex flex-wrap flex-grow  ">
          {LOCATIONS.map((items, index) => (
            <div
              key={index}
              className="transition ease-in-out transition-duration-2000ms w-96 h-20 border-2 border-solid border-grey-400 rounded-xl p-3 m-2 shadow-sm hover:shadow-md"
            >
              <a href="">
                <p className="text-xl font-normal">{items.head}</p>
                <p className="font-[350]">{items.places}</p>
                <p className="relative -top-[30px] left-[350px]">{">"}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
