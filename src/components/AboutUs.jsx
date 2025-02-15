import zomatoLogo from "../assets/Zomato_logoB.avif";
import indLogo from "../assets/india.png";
function AboutUs() {
  return (
    <>
      <section className="bg-zinc-100 w-full h-[400px] mt-10">
        <div>
          <img src={zomatoLogo} alt="ZomatoLogo" />
          <select>
            <option value="">
              <img src={indLogo} alt="" />
              India
            </option>
            <option value="">UAE</option>
          </select>
          <select className="p-x-2 rounded-sm">
            <option value="">English</option>
            <option value="">Turkish</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
