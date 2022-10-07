import linkIcon from '../../images/link_icon2.svg';

export default function Portfolio() {
    return (
        <section className='portfolio section section_narrow_sides'>
            <h2 className='main__title main__title_grey'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <p className='portfolio__title'>Статичный сайт</p>
                    <a href='https://kkulumbegova.github.io/russian-travel/' className='portfolio__link' target='__blank'><img alt='Ссылка' src={linkIcon} className='link__arrow'/></a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__title'>Адаптивный сайт</p>
                    <a href='https://kkulumbegova.github.io/russian-travel/' className='portfolio__link' target='__blank'><img alt='Ссылка' src={linkIcon} className='link__arrow'/></a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__title'>Одностраничное приложение</p>
                    <a href='https://kulumbegova.mesto.nomorepartiesxyz.ru/' className='portfolio__link' target='__blank'><img alt='Ссылка' src={linkIcon} className='link__arrow'/></a>
                </li>
            </ul>
        </section>
    )
}