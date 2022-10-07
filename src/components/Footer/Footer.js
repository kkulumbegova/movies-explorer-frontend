export default function Footer() {
    return (
      <section className="footer section section_narrow_sides">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__year">&#169; 2022</p>
          <ul className="footer__links">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/kkulumbegova/"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Github
            </a>
          </ul>
        </div>
      </section>
    );
  }