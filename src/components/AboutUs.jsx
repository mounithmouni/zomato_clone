import zomatoLogo from "../assets/Zomato_logoB.avif";
import DropDown from "./DropDown";
const AboutUs = () => {
  return (
    <>
      <section className="mx-44 mt-10 h-[55vh] ">
        <div className="flex gap-[700px]">
          <img src={zomatoLogo} alt="zomato" />
          <div className="realtive flex gap-4">
            <DropDown />
            <DropDown />
          </div>
        </div>
        <div className="mt-14">
          <div className="flex gap-32">
            <div>
              <h1>About Zomato</h1>
              <p className="font-extralight text-[16px]">Who We Are </p>
              <p className="font-extralight text-[16px]">Blog</p>
              <p className="font-extralight text-[16px]">Work With Us</p>
              <p className="font-extralight text-[16px]">Investor Relations</p>
              <p className="font-extralight text-[16px]">Report Fraud</p>
              <p className="font-extralight text-[16px]">Press Kit</p>
              <p className="font-extralight text-[16px]">Contact Us</p>
            </div>
            <div>
              <h1>Zomaverse</h1>
              <p className="font-extralight text-[16px]">Zomato</p>
              <p className="font-extralight text-[16px]">Blinkit</p>
              <p className="font-extralight text-[16px]">District</p>
              <p className="font-extralight text-[16px]">Feeding India</p>
              <p className="font-extralight text-[16px]">Hyperpure</p>
              <p className="font-extralight text-[16px]">Zomato Live</p>
              <p className="font-extralight text-[16px]">Zomaland</p>
            </div>
            <div>
              <h1>FOR RESTAURANTS</h1>
              <p className="font-extralight text-[16px]">Partner With Us</p>
              <p className="font-extralight text-[16px]">Apps For You</p>
            </div>
            <div>
              <h1>LEARN MORE</h1>
              <p className="font-extralight text-[16px]">Privacy</p>
              <p className="font-extralight text-[16px]">Security</p>
              <p className="font-extralight text-[16px]">Terms</p>
            </div>
            <div>
              <h1>SOCIAL LINKS</h1>
              <p className="font-extralight text-[16px]">Privacy</p>
              <p className="font-extralight text-[16px]">Security</p>
              <p className="font-extralight text-[16px]">Terms</p>
            </div>
          </div>
          <hr className="border-1 mt-10" />
          {/* <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2025 © Zomato™ Ltd.
            All rights reserved.
          </p> */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
