export default function Details({ heads, cuisines }) {
  return (
    <>
      <details className="mt-4 border-2 border-gray-200 w-5/6 p-2 rounded-md ">
        <summary className="font-normal text-xl flex justify-between items-center py-3 px-4 mb-2 ">
          {heads}
        </summary>
        <section className="rgb-[105,105,105] py-1 px-4 pr-8 ">
          {cuisines.map((item) => (
            <div key={item.text} className="inline">
              <a
                href={item.link}
                className="text-center text-[1rem] leading-7 font-[290]"
              >
                {item.text}
              </a>
              <span className={item.classNames}></span>
            </div>
          ))}
        </section>
      </details>
    </>
  );
}
