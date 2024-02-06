import CardIcon from "../cardIcon/CardIcon";
import SubtitleP from "../subtitleP/SubtitleP";
import Title5 from "../title5/Title5";

function Card({ lineHeight, icon, colorIcon, title, subtitleP }) {
  return (
    <div className="flex gap-x-7">
      <CardIcon icon={icon} colorIcon={colorIcon} />
      <div className="flex flex-col gap-y-4 max-w-350px">
        <Title5>{title}</Title5>
        <SubtitleP>{subtitleP}</SubtitleP>
      </div>
    </div>
  );
}

export default Card;
