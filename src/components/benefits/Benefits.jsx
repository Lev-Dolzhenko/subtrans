import BenefitsItems from "../benefitsItems/BenefitsItems";
import Button from "../button/Button";
import Title2 from "../title2/Title2";

import benefitsImg from "../../assets/benefitImg.png";

function Benefits() {
  return (
    <section className="py-20">
      <div className="flex justify-between">
        <div>
          <Title2 marginY={"mb-12"}>Почему мы?</Title2>
          <BenefitsItems />
          <Button maxWidth={"max-w-350px"} width={"w-full"} marginX={"mt-8"}>
            Заказать звонок
          </Button>
        </div>
        <div>
          <img src={benefitsImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
