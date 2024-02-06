function HeaderNav({ text = "" }) {
  return (
    <li className="hover:-translate-y-1 transition-transform">
      <a className="font-montserrat leading-6 text-colorTitle" href="#!">
        {text}
      </a>
    </li>
  );
}

export default HeaderNav;
