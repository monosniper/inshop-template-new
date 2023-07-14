import React from 'react';

const AdultPopup = () => {
    return <div id="popup" aria-hidden="false" className="popup popup_check popup_show">
        <div className="popup__wrapper">
            <div className="popup__content">
                <div className="popup__text">
                    <div className="popup__title">Внимание!</div>
                    <div className="popup__main-text">
                        Данный сайт может содержать контент непристойного характера (18+)
                    </div>
                    <div className="popup__actions">
                        <a href="" className="popup__btn button">Покинуть сайт</a>
                        <a href="" className="popup__btn button" data-close>Ок</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default AdultPopup;