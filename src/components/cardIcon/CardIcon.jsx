function CardIcon({ icon, colorIcon }) {
  return (
    <div className={`flex-shrink-0 p-4 rounded-icon w-16 h-16 flex items-center justify-center ${colorIcon}`}>
      <img src={icon} alt="burse" />
    </div>
  );
}

export default CardIcon;
