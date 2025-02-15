import bgImg from "../assets/BgDishes.avif";

export default function Header() {
  let txt = "text-white text-base font-light";
  let right_a = "decoration-none text-lg font-normal ";

  return (
    <>
      <header className="">
        <img
          className="object-cover w-full max-h-[410px] absolute -z-10"
          src={bgImg}
          alt="Image consists of Dishes"
        />
        <div className="flex items-center justify-center pt-5 gap-96 ">
          <p className={txt}>Get the app</p>
          <div className="flex items-center justify-end ml-48 gap-5">
            <a className={txt + " " + right_a} href="">
              Investor Relations
            </a>
            <a className={txt + " " + right_a} href="">
              Add restaurant
            </a>
            <a className={txt + " " + right_a} href="">
              Log in
            </a>
            <a className={txt + " " + right_a} href="">
              Sign up
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
