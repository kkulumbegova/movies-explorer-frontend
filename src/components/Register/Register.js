import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useForm } from "react-hook-form";

export default function Register({ onRegister, message }) {
  const { 
    register, 
    formState: {errors, isValid},
    handleSubmit,
    reset
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    onRegister({ name: data.name, email: data.email, password: data.password});
    reset();
  }

  return (
    <section className="register">
      <img src={logo} alt="Логотип" className="register__logo" />
      <h3 className="form__header">Добро пожаловать!</h3>
      <form onSubmit={handleSubmit(onSubmit)} name="place" className="form">
        <div className="field">
          <label htmlFor="text_name" className="form__description">
            Имя
          </label>
          <input
            type="text"
            id="text_name"
            name="text_name"
            className="form__input"
            {...register('name', {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 2,
              message: "Имя должно быть больше 2 символов"
            },
            maxLength: {
              value: 30,
              message: "Имя должно быть менее 30 символов"
            },
            pattern: {
              value: /^[а-яА-ЯёЁa-zA-Z/-\s]+$/,
              message: "Имя может содержать буквы, пробел и дефис"
            },
            })}
          />
          {errors?.name && <span id="text-error" className="form__input-error">{errors?.name?.message || "Что-то пошло не так..."}</span>}
        </div>
        <div className="field">
        <label htmlFor="email" className="form__description">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="name"
          className="form__input"
          {...register('email', {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 2,
              message: "Email должен быть больше 2 символов"
            },
            maxLength: {
              value: 30,
              message: "Email должен быть менее 30 символов"
            },
            pattern: {
              value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
              message: "Email введен в неверном формате"
            }
            }
            )}
          />
          {errors?.email && <span id="email-error" className="form__input-error">{errors?.email?.message || "Что-то пошло не так..."}</span>}
        </div>
        <div className="field">
        <label htmlFor="password" className="form__description">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form__input"
          {...register('password', {
            required: "Поле обязательно для заполнения"
          })}
        />
        {errors?.password && <span id="password-error" className="form__input-error">{errors?.password?.message || "Что-то пошло не так..."}</span>}
        </div>
        <span id="register-error" className="form__error"></span>
        <button
          type="submit"
          name="submit"
          className="form__submit form__submit_register"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__link">
        Уже зарегистрированы?
        <Link to="/signin" className="login__link login__link_footer">
          Войти
        </Link>
      </p>
    </section>
  );
}
