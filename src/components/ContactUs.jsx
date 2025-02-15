import Mobile from "../assets/mobile.avif";
import Gplay from "../assets/gplay.webp";
import AppStore from "../assets/appstore.webp";
export default function ContactUs() {
  return (
    <>
      <section className="mt-24 ">
        <div className="  flex items-center justify-center gap-10  h-2/3 bg-red-50 bg-opacity-40 ">
          <img
            className="my-24 w-[250px] h-[400px] object-contain "
            src={Mobile}
            alt="Mobile with Zomato App"
          />
          <div className="flex flex-col  gap-6 w-[500px]">
            <h2 className="text-[44px]">Get the Zomato app</h2>
            <p className="font-light">
              We will send you a link, open it on your phone to download the app
            </p>
            <div className="flex">
              <input className="mr-2" type="radio" name="app" />
              <label className="mr-5 font-light">Email</label>
              <input className="mr-2" type="radio" name="app" />
              <label className="font-light">Phone</label>
            </div>
            <div className="flex gap-3 ">
              <input
                type="text"
                value={"Email"}
                className="p-3 w-60 border rounded-md opacity-45    "
              />
              <button className=" px-4 bg-red-400 rounded-md hover:bg-red-500 transition-all">
                Share App Link
              </button>
            </div>
            <p className="font-light">Download app from</p>
            <div className="flex gap-3">
              <a href="#">
                <img
                  className=" w-42 h-12 "
                  src={Gplay}
                  alt="Google Play Icon"
                />
              </a>
              <a href="#">
                <img
                  className=" w-42 h-12 "
                  src={AppStore}
                  alt="App Store Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
