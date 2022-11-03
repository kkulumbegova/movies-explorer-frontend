import { HashLink } from "react-router-hash-link";

export default function NavTab() {
  return (
    <nav className="navigation__list">
      <HashLink to="/#AboutProject" className="navigation__item">
        О проекте
      </HashLink>
      <HashLink to="/#Techs" className="navigation__item">
        Технологии
      </HashLink>
      <HashLink to="/#AboutMe" className="navigation__item">
        Студент
      </HashLink>
    </nav>
  );
}
