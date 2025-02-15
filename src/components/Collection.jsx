/* eslint-disable react/prop-types */
export default function Collection({ title, image, description }) {
  const gradientStyle = {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    borderRadius: "0.6rem",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
  };

  const textStyle = {
    position: "absolute",
    bottom: "1rem",
    left: "1rem",
    color: "white",
    zIndex: 1,
  };

  return (
    <div className="mt-8 relative w-[285px] h-[350px]">
      <img
        className="object-cover w-full h-full rounded-xl opacity-95"
        src={image}
        alt={title}
      />
      <div style={gradientStyle}></div>
      <div style={textStyle}>
        <p className="text-base mb-1">{title}</p>
        <h6 className="text-base">{description}</h6>
      </div>
    </div>
  );
}
