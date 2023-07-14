import React from 'react';

const RegisterPopup = () => {
    return <div id="signin" aria-hidden="true" className="popup">
        <div className="popup__wrapper">
            <div className="popup__content">
                <button data-close type="button" className="popup__close"></button>
                <div className="popup__text">
                    <div className="popup__title">Регистрация</div>
                    <form action="" className="form">
                        <div className="form__line">
                            <label htmlFor="s_0" className="form__label">E-mail</label>
                            <input className="form__input input" autoComplete="off" id="s_0" type="email"
                                   name="form[]" data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__line">
                            <label htmlFor="s_1" className="form__label">Пароль</label>
                            <input className="form__input input" autoComplete="off" id="s_1" type="email"
                                   name="form[]" data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__line">
                            <label htmlFor="s_2" className="form__label">Пароль еше раз</label>
                            <input className="form__input input" autoComplete="off" id="s_2" type="email"
                                   name="form[]" data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__actions">
                            <button className="form__link" type="button" data-popup="#login">Войти в аккаунт
                            </button>
                            <button className="form__button button" type="submit">Готово</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};

export default RegisterPopup;