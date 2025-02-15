import zomatoLogo from "../assets/Zomato_logo.avif";
import locationPng from "../assets/location.png";
import downArrow from "../assets/down.png";
import searchPng from "../assets/search.png";

export default function InputSec() {
  let png_img = "w-5 h-5 object-cover self-center opacity-65  mr-2 -p-2";
  let inp_boxes = "p-1 border-none overflow-hidden  focus:outline-none";
  return (
    <>
      <div className="flex items-center flex-col gap-1 ">
        <img className="w-60 my-10" src={zomatoLogo} alt="Zomato Logo" />
        <p className=" text-4xl mb-10 text-white font-normal">
          Discover the best food & drinks in Vijayawada
        </p>
        <div className="w-2/4 p-3 self-center bg-white flex rounded-lg ">
          <img className={png_img} src={locationPng} alt="Location PNG" />
          <input className={inp_boxes} type="text" placeholder="Search.." />
          <img className={png_img} src={downArrow} alt="Arrow Down" />
          <img className={png_img} src={searchPng} alt="search PNG" />
          <input
            className={inp_boxes}
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </>
  );
}
