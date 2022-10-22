import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../Header/Header.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useForm } from "react-hook-form";

export default function Profile({onMobileMenu, onUpdateUser, onSignOut}) {
  const currentUser = useContext(CurrentUserContext);

  const { 
    register, 
    setValue,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm({
    mode: "onChange"
  });


  useEffect(() => {
    setValue('name',currentUser.name);
    setValue('email',currentUser.email);
  }, []);

const onSubmit = (data) => {
  setValue('name', data.name);
  setValue('email', data.email);
  onUpdateUser({
    name: data.name,
     email: data.email
  });

}

  return (
    <>
      <Header onMobileMenu={onMobileMenu}/>
      <section className="profile">
        <h1 className="profile__header">Привет, {currentUser.name}!</h1>
        <form action="#" name="place" onSubmit={handleSubmit(onSubmit)} className="profile__form">
          <div className="profile__field profile__field_border">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              className="profile__input"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              {...register('name', {
                required: "Поле обязательно для заполнения",
              })}
            />
            {errors?.name && <span id="name-error" className="form__input-error form__input-error_thin">{errors?.name?.message || "Что-то пошло не так..."}</span>}
          </div>

          <div className="profile__field">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="profile__input"
              placeholder="E-mail"
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
              {errors?.email && <span id="email-error" className="form__input-error form__input-error_thin">{errors?.email?.message || "Что-то пошло не так..."}</span>}
            </div>
          <button type="submit" name="submit" className="profile__submit" disabled={!isValid}>
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__link" onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}
