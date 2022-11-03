import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="error">
            <h1 className="error-code">404</h1>
            <p className="error-message">Страница не найдена</p>
            <Link to='/' className="link__back">Назад</Link>

        </section>

    )
}