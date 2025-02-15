/* eslint-disable react/prop-types */

export default function Card({ title, image, description }) {
  return (
    <div className="card">
      <img
        className="w-[550px] h-[160px] object-cover box-border rounded-t-[10px] rounded-b-none"
        src={image}
        alt=""
      />
      <div className="my-4 flex flex-col gap-6 ml-4">
        <p className="text-xl">{title}</p>
        <p className="-mt-6 font-light">{description}</p>
      </div>
    </div>
  );
}
