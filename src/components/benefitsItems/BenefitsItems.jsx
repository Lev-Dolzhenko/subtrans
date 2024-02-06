import BenefitsItem from "../benefitsItem/BenefitsItem";

import castle from "../../assets/castleCardIcon.svg";
import sp from "../../assets/spCardIcon.svg";
import custom from "../../assets/customCardIcon.svg";
import bursel from "../../assets/burseIconCard.svg";
import app from "../../assets/appCardIcon.svg";

function BenefitsItems() {
  return (
    <div>
      <ul className="flex flex-col gap-y-6">
        <BenefitsItem icon={castle} text={"Безопасное хранение данных"} />
        <BenefitsItem icon={sp} text={"Поддержка по телефону и в чате"} />
        <BenefitsItem icon={custom} text={"Интеграция с внешними сервисами"} />
        <BenefitsItem icon={bursel} text={"Собственная биржа"} />
        <BenefitsItem icon={app} text={"Мобильное приложение"} />
      </ul>
    </div>
  );
}

export default BenefitsItems;
