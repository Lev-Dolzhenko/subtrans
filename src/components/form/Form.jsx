import Title3 from "../title3/titile3";
import Input from "../input/Input";
import Button from "../button/Button";

function Form() {
  return (
    <section className="bg-accentYellowHover py-16">
      <form>
        <label htmlFor="name">
          <Title3 maxWidth={"max-w-920px"} marginY={"mb-12"}>
            Оставь заявку прямо сейчас и получи 30 дней бесплатного пользования
            системой
          </Title3>
        </label>
        <div className="flex gap-x-7">
          <Input placeholder={'Имя'}/>
          <Input placeholder={'Телефон'}/>
          <Button width={"w-full"} maxWidth={"max-w-350px"}>
            Оставить заявку
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Form;
