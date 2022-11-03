export default function AboutProject() {
  return(
    <section className="aboutProject section section_narrow_sides">
      <h2 className="main__title" id='AboutProject'>О проекте</h2>
      <div className="aboutProject__info">
        <div className="aboutProject__info_item">
          <h3 className="aboutProject__header">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__info_item">
          <h3 className="aboutProject__header">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__info">
        <div className="aboutProject__scheme_1week">
          <p className="aboutProject__period aboutProject__period_green">1 неделя</p>
          <p className="aboutProject__description">Back-end</p>
        </div>
        <div className="aboutProject__scheme_4weeks">
          <p className="aboutProject__period aboutProject__period_grey">4 недели</p>
          <p className="aboutProject__description">Front-end</p>
        </div>
      </div>
    </section>
  )
}