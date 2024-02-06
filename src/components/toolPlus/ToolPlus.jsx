import lead from "./../../assets/leadCardIcon.svg";
import pay from "./../../assets/payCardIcon.svg";
import custom from "./../../assets/customCardIcon.svg";

import Card from "../card/Card";
import SubtitleP from "../subtitleP/SubtitleP";
import Title2 from "../title2/Title2";

function ToolPlus() {
  return (
    <section className="py-20">
      <div className="flex justify-between items-center mb-14">
        <Title2>А так же</Title2>
        <SubtitleP>
          SABTRANS система охватывает все направления деятельности компании
        </SubtitleP>
      </div>
      <div className="flex justify-between gap-7">
        <Card
          icon={lead}
          colorIcon={"bg-accentBlue"}
          title={"Лиды"}
          subtitleP={
            "можно собирать лиды не только с сайтов, но и с мессенджеров, почтовых клиентов, социальных сетей и других источников.  И еще какой-нибудь текст."
          }
        />
        <Card
          icon={pay}
          colorIcon={"bg-accentBlue"}
          title={"Финансы"}
          subtitleP={
            "Все плановые и фактические транзакции доступны во вкладке 'Финансы'. Не переключаясь между разделами, вносите новые и редактируйте уже существующие."
          }
        />
        <Card
          icon={custom}
          colorIcon={"bg-accentBlue"}
          title={"Интеграция"}
          subtitleP={
            "Сайт, соцсети, мессенджеры, телефония, почта - со всех каналов взаимодействия заявки автоматически попадут в систему."
          }
        />
      </div>
    </section>
  );
}

export default ToolPlus;
