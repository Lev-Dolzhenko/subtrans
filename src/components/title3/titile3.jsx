function Title3({ children, marginY, maxWidth }) {
  return (
    <div className={`${marginY} ${maxWidth}  mx-auto`}>
      <h3
        className={`leading-10 text-white font-montserrat font-semibold text-3xl text-center`}
      >
        {children}
      </h3>
    </div>
  );
}

export default Title3;
