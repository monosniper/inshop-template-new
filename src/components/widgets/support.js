import React from 'react';

const SupportWidget = () => {
    return <div className="widget-support">
        <button className="widget-support__btn _icon-chat"><span>Help Center</span></button>
        <div className="widget-support__chat chat">
            <div className="chat__header">
                <div className="chat__title">Онлайн-консультант</div>
                <button className="chat__close _icon-close" type="button"></button>
            </div>
            <div className="chat__body">
                <div className="chat__item">
                    <time className="chat__date">11 марта</time>
                    <div className="chat__message _bot">
                        <div className="chat__text">Здравствуйте!</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _bot">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _user">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _user">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _bot">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                </div>
                <div className="chat__item">
                    <time className="chat__date">16 марта</time>
                    <div className="chat__message _bot">
                        <div className="chat__text">Здравствуйте!</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _bot">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _user">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _user">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                    <div className="chat__message _bot">
                        <div className="chat__text">Чем могу помочь?</div>
                        <time className="chat__time">11:52</time>
                    </div>
                </div>
            </div>
            <div className="chat__send">
                <div className="chat__send-input">
                    <input className="input" autoComplete="off" type="text" name="form[]"
                           data-error="Ошибка" placeholder="Введите сообщение" />
                </div>
                <button className="chat__btn _icon-send" type="button"></button>
            </div>
        </div>
    </div>;
};

export default SupportWidget;