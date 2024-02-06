import logotype from "./../../assets/logotype.png";

function HeaderLogo() {
  return (
    <div className="mr-24">
      <a href="#!">
        <img src={logotype} alt="Sabtrans" />
      </a>
    </div>
  );
}

export default HeaderLogo;
