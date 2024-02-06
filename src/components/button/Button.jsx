const textButton = "text-white font-montserrat leading-6 font-medium ";

function Button({ children = "", isAccent = true, marginX, width, maxWidth }) {
  return (
    <button
      className={`${textButton} ${width} ${maxWidth}  flex ${marginX} items-center justify-center rounded-base transition-colors ${
        isAccent
          ? "py-3 px-6 bg-accentYellow hover:bg-accentYellowHover"
          : "px-24 py-4 bg-accentBlue hover:bg-accentBlueHover"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
