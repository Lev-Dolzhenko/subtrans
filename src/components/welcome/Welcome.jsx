import Button from "../button/Button.jsx";
import SubtitleP from "../subtitleP/SubtitleP.jsx";

function Welcome() {
  return (
    <>
      <section className="mb-455px">
        <div className="mb-3">
          <h1 className="text-colorTitle font-montserrat text-6xl font-bold leading-title1 text-center">
            ERP система для компаний по аренде спецтехники
          </h1>
        </div>
        <SubtitleP
          fontSize={"text-base"}
          fontWeight={"text-medium"}
          lineHeight={"leading-30px"}
          align={"text-centre"}
          marginY={"mb-14"}
        >
          SABTRANS автоматизирует бизнес-процессы, наведет порядок в финансах,
          поможет увеличить продажи и покажет реальную прибыль.
        </SubtitleP>
        <Button marginX={"mx-auto"} isAccent={false}>
          Оставить заявку
        </Button>
      </section>
    </>
  );
}

export default Welcome;
