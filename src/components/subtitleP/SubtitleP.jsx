function SubtitleP({
  fontSize,
  lineHeight,
  fontWeight,
  align,
  marginY,
  color,
  children,
}) {
  // Не разделяйте return и JSX на разные строки
  return (
    <div className={`${marginY}`}>
      <p
        className={`text-colorSubtitleP font-manrope ${fontSize} ${lineHeight} ${fontWeight} ${align}`}
      >
        {children}
      </p>
    </div>
  );
}

export default SubtitleP;
