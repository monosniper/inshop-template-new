import React from 'react';

const LoginPopup = () => {
    return <div id="login" aria-hidden="true" className="popup">
        <div className="popup__wrapper">
            <div className="popup__content">
                <button data-close type="button" className="popup__close"></button>
                <div className="popup__text">
                    <div className="popup__title">Вход</div>
                    <form action="" className="form">
                        <div className="form__line">
                            <label htmlFor="i_0" className="form__label">E-mail</label>
                            <input className="form__input input" autoComplete="off" id="i_0" type="email"
                                   name="form[]" data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__line">
                            <label htmlFor="i_1" className="form__label">Пароль</label>
                            <input className="form__input input" autoComplete="off" id="i_1" type="email"
                                   name="form[]" data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__actions">
                            <button className="form__link" type="button" data-popup="#signin">Создать аккаунт
                            </button>
                            <button className="form__button button" type="submit">Готово</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};

export default LoginPopup;