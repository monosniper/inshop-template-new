import React, {useEffect, useState} from 'react';
import Layout from "@/components/layout/Layout";
import getShop from "@/lib/getShop";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import $config from "@/lib/config";
import getPosition from "@/lib/getPosition";
import getDiscountedPrice from "@/utils/getDiscountedPrice";
import getQuery from "@/utils/getQuery";
import store from "@/store";

export async function getServerSideProps({ req }) {
    const rs = await getShop(req, {
        positions: true,
        positions_filter: {
            id: req.query?.id
        }
    })

    // if(!(rs.shop.Modules.find(({slug}) => slug === $config.modules.basket))) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         },
    //     };
    // }

    return rs.shop ? { props: {
        ...(await serverSideTranslations(rs.shop.options.language)),
        shop: rs.shop
    } } : rs
}

const Order = ({ shop }) => {
    const [positions, setPositions] = useState([])

    useEffect(() => {
        console.log(shop)
        setPositions(shop.Positions)
    }, [])

    const getThumbPath = (uuid, image) => {
        return image.length ? `https://www.inshop-online.com/storage/${uuid}/images/${image[0].filename}` : '/assets/img/product.png'
    }

    return (
        <Layout>
            <section className="order-page">
                <h2 className="order-page__title title">Оформление заказа</h2>
                <div className="order-page__inner">
                    <div className="order-page__cart cart">
                        <div className="cart__items">
                            {positions.map((position, i) => (
                                <div key={'item-'+i} className="cart__item item-cart">
                                    <div className="item-cart__body">
                                        <div className="item-cart__img -ibg"><img src={getThumbPath(position.uuid, position.Media)} alt="Image" />
                                        </div>
                                        <div className="item-cart__info">
                                            <div className="item-cart__title">{position.title}</div>
                                            <div className="item-cart__price">{getDiscountedPrice(position)}{shop.options.currency}</div>
                                        </div>
                                    </div>
                                    <div className="item-cart__qty">
                                        {/*<div className="item-cart__qty-price">*/}
                                        {/*    {getDiscountedPrice(position)}{shop.options.currency}*/}
                                        {/*</div>*/}
                                        {/*<div data-quantity className="quantity">*/}
                                        {/*    <button data-quantity-plus type="button"*/}
                                        {/*            className="quantity__button quantity__button_plus _icon-arr"></button>*/}
                                        {/*    <div className="quantity__input"><input data-quantity-value autoComplete="off"*/}
                                        {/*                                            type="text" name="form[]" value="1" />*/}
                                        {/*    </div>*/}
                                        {/*    <button data-quantity-minus type="button"*/}
                                        {/*            className="quantity__button quantity__button_minus _icon-arr"></button>*/}
                                        {/*</div>*/}
                                        {store.hasModule($config.modules.basket) ? <button className="item-cart__del _icon-close" type="button"></button> : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form action="" className="order-page__form form">
                        <div className="form__line">
                            <label htmlFor="o_0" className="form__label">ФИО</label>
                            <input className="input" autoComplete="off" id="o_0" type="text" name="form[]"
                                   data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__line">
                            <label htmlFor="o_1" className="form__label">E-mail</label>
                            <input className="input" autoComplete="off" id="o_1" type="email" name="form[]"
                                   data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__line">
                            <label htmlFor="o_2" className="form__label">Адрес</label>
                            <input className="input" autoComplete="off" id="o_2" type="text" name="form[]"
                                   data-error="Ошибка" placeholder="" />
                        </div>
                        <div className="form__line">
                            <label htmlFor="o_3" className="form__label">Комментарий</label>
                            <input className="input" autoComplete="off" id="o_3" type="text" name="form[]"
                                   data-error="Ошибка" placeholder="" />
                        </div>
                        {store.hasModule($config.modules.promo) ? (
                            <div className="form__line">
                                <label htmlFor="o_4" className="form__label">Промокод</label>
                                <input className="input" autoComplete="off" id="o_4" type="text" name="form[]"
                                       data-error="Ошибка" placeholder="" />
                            </div>
                        ) : null}
                        <div className="form__line">
                            <div className="form__total">Сумма: <strong>9898Р</strong></div>
                            <button className="form__btn button" type="submit">Перейти к оплате</button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default Order;