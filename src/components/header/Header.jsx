import HeaderLogo from "../headerLogo/HeaderLogo";
import HeaderNav from "../headerNav/HeaderNav";
import Button from "../button/Button";

function Header() {
  return (
    <header className="mb-20">
      <div className="flex items-center">
        <HeaderLogo />
        <nav>
          <ul className="flex gap-x-8">
            <HeaderNav text={"Главная"} />
            <HeaderNav text={"Возможности"} />
            <HeaderNav text={"Тариф"} />
            <HeaderNav text={"Контакты"} />
          </ul>
        </nav>
        <Button marginX={'ml-auto'}>Попробовать бесплатно</Button>
      </div>
    </header>
  );
}

export default Header;
