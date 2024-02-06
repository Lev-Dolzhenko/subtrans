import burse from "./../../assets/burseIconCard.svg";
import statistic from './../../assets/analyticsiIconCard.svg';
import doc from './../../assets/docIconCard.svg';

import Card from "../card/Card";
import SubtitleP from "../subtitleP/SubtitleP";
import Title2 from "../title2/Title2";
import Title5 from "../title5/Title5";

function Tool() {
  return (
    <section className="py-20">
      <div className="flex gap-x-7">
        <div className="flex flex-col gap-y-10 max-w-635px">
          <Title2 color={"text-colorTitle"} lineHeight={"leading-49px"}>
            Мы предлагаем полный набор инструментов
          </Title2>
          <SubtitleP lineHeight={"leading-7"} fontWeight={"font-medium"}>
            для управления взаимоотношениями с клиентами, комплексной
            автоматизации бизнеса, а также успешного развития корпоративной
            информационной системы. Удобный и понятный интерфейс позволяет
            эффективно работать c системой из любой точки мира. Внедрение
            SABTRANS системы позволит значительно повысить производительность
            менеджеров, а также увеличит объем продаж.
          </SubtitleP>
        </div>
        <div className="flex flex-col gap-y-10">
          <Card
            icon={burse}
            colorIcon={"bg-accentYellow"}
            title={"Биржа"}
            subtitleP={
              "Cпециальная возможность в системе, на которой люди заключают сделки по аренде спецтехники."
            }
          ></Card>
          <Card
            icon={statistic}
            colorIcon={"bg-accentYellow"}
            title={"Аналитика"}
            subtitleP={
              "Анализирует данные о клиентах, заказов, звонках, чтобы помочь и упростить принятие более эффективных бизнес-решений"
            }
          ></Card>
          <Card
            icon={doc}
            colorIcon={"bg-accentYellow"}
            title={"Заказы"}
            subtitleP={
              "Модуль позволяется вести заказы, выставлять и автоматически отправлять клиентам счета, коммерческие предложения."
            }
          ></Card>
        </div>
      </div>
    </section>
  );
}

export default Tool;
