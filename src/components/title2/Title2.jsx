function Title2({ color, lineHeight, children, marginY }) {
  return (
    <div className={`${marginY}`}>
      <h2
        className={`${color} ${lineHeight} text-colorTitle  font-montserrat font-semibold text-4xl`}
      >
        {children}
      </h2>
    </div>
  );
}

export default Title2;
