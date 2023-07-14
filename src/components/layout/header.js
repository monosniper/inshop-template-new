import React, {useState} from 'react';
import store from "@/store";
import {observer} from "mobx-react-lite";
import $config from "@/lib/config";

const Header = () => {
    const [isUserMenuShow, setIsUserMenuShow] = useState(false)
    const [isCartShow, setIsCartShow] = useState(false)

    const toggleUserMenu = () => {
        setIsUserMenuShow(!isUserMenuShow)
        setIsCartShow(false)
    }
    const toggleCart = () => {
        setIsCartShow(!isCartShow)
        setIsUserMenuShow(false)
    }

    const favicon = store.shopMedia && store.shopMedia.length && store.shopMedia.find(media => media.name === 'favicon') ? [
        store.shopMedia.find(media => media.name === 'favicon').filename
    ] : []

    const getFaviconPath = () => {
        return favicon.length ? `https://www.inshop-online.com/storage/${store.uuid}/images/${favicon[0]}` : null
    }

    const faviconSrc = getFaviconPath()

    return <header className={"header header_user" + (store.isMenuShow ? " header__menu_active" : '')}>
        <div className="header__container">
            <a href="/" className="header__logo logo">
                {faviconSrc && <img src={faviconSrc} alt={store.options.title}/>}
            </a>
            <div className="header__actions">
                <button className="header__btn header__btn-m _icon-search" type="button"></button>
                <form action="#" className="header__search search-header">
                    <div className="search-header__wrapper">
                        <button className="search-header__btn _icon-search" type="submit"></button>
                        <input className="input search" autoComplete="off" type="text" name="form[]"
                               data-error="Ошибка" placeholder="Search store" />
                    </div>
                    <div className="search-header__values values-search">
                        <div className="values-search__items">
                            <a className="values-search__item item-values">
                                <div className="item-values__img -ibg"><img src="img/product/01.jpg"
                                                                            alt="Image" /></div>
                                <div className="item-values__body">
                                    <div className="item-values__header">
                                        <div className="item-values__title">Луффи</div>
                                        <div className="item-values__price">4000P</div>
                                    </div>
                                    <div className="item-values__text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
                                        architecto atque
                                        dolor earum laudantium necessitatibus, provident recusandae sapiente
                                        temporibus?
                                    </div>
                                </div>
                            </a>
                            <a className="values-search__item item-values">
                                <div className="item-values__img -ibg"><img src="img/product/01.jpg"
                                                                            alt="Image" /></div>
                                <div className="item-values__body">
                                    <div className="item-values__header">
                                        <div className="item-values__title">Луффи</div>
                                        <div className="item-values__price">4000P</div>
                                    </div>
                                    <div className="item-values__text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
                                        architecto atque
                                        dolor earum laudantium necessitatibus, provident recusandae sapiente
                                        temporibus?
                                    </div>
                                </div>
                            </a>
                            <a className="values-search__item item-values item-values_category">
                                <div className="item-values__title"><img src="img/icons/cloth.png"
                                                                         alt="Image" /><span>Clothing</span>
                                </div>
                                <div className="item-values__text">Категория</div>
                            </a>
                            <a className="values-search__item item-values item-values_category">
                                <div className="item-values__title _icon-fav_f"><span>картинкаааа</span>
                                </div>
                                <div className="item-values__text">Тег</div>
                            </a>
                        </div>
                    </div>
                </form>
                <div className="header__actions-right">
                    <div className={"header__menu menu"}>
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <button onClick={store.toggleSubMenu} className="menu__link menu__link_m _icon-arr"
                                            type="button">explore
                                    </button>
                                </li>
                                <li className="menu__item"><a href="/catalog" className="menu__link">products</a>
                                </li>
                                {store.hasModule($config.modules.custom_pages) && <>
                                    {store.getModule($config.modules.custom_pages).pages.map(({ title, slug }) => (
                                        <li key={slug} className="menu__item"><a href={slug} className="menu__link">{title}</a></li>
                                    ))}
                                </>}
                            </ul>
                        </nav>
                    </div>
                    <div className="header__group-btn">
                        {store.hasModule($config.modules.basket) && <div className="header__cart">
                            <div onClick={toggleCart} className="header__btn _icon-basket">
                                <span>3</span>
                            </div>
                            {isCartShow && (
                                <div className="cart">
                                    <div className="cart__items">
                                        <div className="cart__item item-cart">
                                            <div className="item-cart__body">
                                                <div className="item-cart__img -ibg"><img
                                                    src="img/product/01.jpg" alt="Image" />
                                                </div>
                                                <div className="item-cart__info">
                                                    <div className="item-cart__title">Луффи</div>
                                                    <div className="item-cart__price">4900P</div>
                                                </div>
                                            </div>
                                            <div className="item-cart__qty">
                                                <div className="item-cart__qty-price">
                                                    4900P
                                                </div>
                                                <div data-quantity className="quantity">
                                                    <button data-quantity-plus type="button"
                                                            className="quantity__button quantity__button_plus _icon-arr"></button>
                                                    <div className="quantity__input"><input data-quantity-value
                                                                                            autoComplete="off"
                                                                                            type="text"
                                                                                            name="form[]"
                                                                                            value="1" /></div>
                                                    <button data-quantity-minus type="button"
                                                            className="quantity__button quantity__button_minus _icon-arr"></button>
                                                </div>
                                                <button className="item-cart__del _icon-close"
                                                        type="button"></button>
                                            </div>
                                        </div>
                                        <div className="cart__item item-cart">
                                            <div className="item-cart__body">
                                                <div className="item-cart__img -ibg"><img
                                                    src="img/product/01.jpg" alt="Image" />
                                                </div>
                                                <div className="item-cart__info">
                                                    <div className="item-cart__title">Луффи</div>
                                                    <div className="item-cart__price">4900P</div>
                                                </div>
                                            </div>
                                            <div className="item-cart__qty">
                                                <div className="item-cart__qty-price">
                                                    4900P
                                                </div>
                                                <div data-quantity className="quantity">
                                                    <button data-quantity-plus type="button"
                                                            className="quantity__button quantity__button_plus _icon-arr"></button>
                                                    <div className="quantity__input"><input data-quantity-value
                                                                                            autoComplete="off"
                                                                                            type="text"
                                                                                            name="form[]"
                                                                                            value="1" /></div>
                                                    <button data-quantity-minus type="button"
                                                            className="quantity__button quantity__button_minus _icon-arr"></button>
                                                </div>
                                                <button className="item-cart__del _icon-close"
                                                        type="button"></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__footer">
                                        <div className="cart__text">Итого</div>
                                        <div className="cart__total">78778P</div>
                                    </div>
                                    <a href="" className="cart__btn button">Оформить заказ</a>
                                </div>
                            )}
                        </div>}
                        {store.hasModule($config.modules.auth) && <div className="header__user">
                            <div onClick={toggleUserMenu} className="header__btn _icon-person"></div>
                            {isUserMenuShow && (
                                <div className="user-menu">
                                    <ul className="user-menu__list">
                                        <li className="user-menu__item">Иванов Иван</li>
                                        <li className="user-menu__item">
                                            <a className="user-menu__link" href="">Личный кабинет</a>
                                        </li>
                                        <li className="user-menu__item">
                                            <a className="user-menu__link"
                                               href=""><span>Сообщения</span><i>3</i></a>
                                        </li>
                                        <li className="user-menu__item">
                                            <span>Баланс </span><strong>0P</strong>
                                        </li>
                                        <li className="user-menu__item">
                                            <a className="user-menu__link" href="">Выйти</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>}
                        <button type="button" onClick={store.toggleMenu} className="menu__icon icon-menu"><span></span></button>
                    </div>
                </div>
            </div>
        </div>
    </header>;
};

export default observer(Header);