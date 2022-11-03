import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import { useForm } from "react-hook-form";

export default function Login({ onLogin, message }) {
  const { 
    register, 
    formState: {errors, isValid},
    handleSubmit,
    reset
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    onLogin({ email: data.email, password: data.password});
    reset();
  }

  return (
    <section className="login">
      <img src={logo} alt='Логотип' className="register__logo"/>
      <h1 className="form__header">Рады видеть!</h1>
      <form action="#" onSubmit={handleSubmit(onSubmit)} name="place" className="form">
      <div className="field">
        <label htmlFor='email' className="form__description">Email</label>
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
        <label htmlFor='password' className="form__description">Пароль</label>
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
          className="form__submit form__submit_login"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <p className="register__link">Еще не зарегистрированы?
        <Link to="/signup" className="login__link login__link_footer">
           Регистрация
        </Link>
      </p>
    </section>
  );
}