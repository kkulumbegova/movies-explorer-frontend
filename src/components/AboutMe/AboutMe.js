import aboutMePhoto from '../../images/about.svg'

export default function AboutMe() {
    return (
        <section className="aboutMe section section_narrow_sides">
            <h3 className="main__title" id='AboutMe'>Студент</h3>
            <div className="aboutMe__container">
                <div className="aboutMe__info">
                    <h2 className="aboutMe__title">Катерина</h2>
                    <p className="aboutMe__subtitle">Фронтенд-разработчик, 34 года</p>
                    <p className="aboutMe__description">Я родилась и живу в Хабаровске, закончила факультет экономики ТОГУ.
                     У меня есть муж и сын. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить. 
                     С 2015 года работала в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                     начала заниматься фриланс-заказами и ушла с постоянной работы.
                    </p>
                    <a href="https://github.com/kkulumbegova/" className="aboutMe__link" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img src={aboutMePhoto} alt='Фото профиля' className='aboutMe__photo'/>
            </div>
        </section>
    )
}