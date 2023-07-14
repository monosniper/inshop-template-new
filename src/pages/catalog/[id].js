import React, {useEffect, useRef, useState} from 'react';
import getShop from "@/lib/getShop";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import store from "@/store";
import Layout from "@/components/layout/Layout";
import productImg from "@/assets/img/product.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {FreeMode, Navigation, Thumbs} from "swiper";
import {AiFillStar} from "react-icons/ai";
import Products from "@/components/Products";
import getPositions from "@/lib/getPositions";
import getDiscountedPrice from "@/utils/getDiscountedPrice";
import $config from "@/lib/config";
import AddBasketBtn from "@/components/AddBasketBtn";
import BuyBtn from "@/components/BuyBtn";

export async function getServerSideProps({ req, params }) {
    const rs = await getShop(req, { positions: true })

    if(rs.shop) {
        const position = rs.shop.Positions.find(({id}) => params.id === id)

        const { positions: similarPositions } = await getPositions(req, { categoryId: position.Category.id, limit: 8 })

        return { props: {
            ...(await serverSideTranslations(rs.shop.options.language)),
            shop: rs.shop,
            position,
            similarPositions
        } }
    }

    return rs;
}

const Position = ({ shop, position, similarPositions }) => {
    useEffect(() => {
        store.setShop(shop)
    }, [])
    // console.log(position)
    // console.log(similarPositions)
    const getImagePath = (filename, uuid=position.uuid) => {
        return `https://www.inshop-online.com/storage/${uuid}/images/${filename}`
    }

    const [thumbsSwiper, setThumbsSwiper] = useState();

    const slider = useRef()

    const [sliderHeight, setSliderHeight] = useState(0)

    useEffect(() => {
        slider.current && setSliderHeight(slider.current.offsetWidth)
    }, [slider])

    return (
        <Layout>
            <section className="single">
                <div className="single__content">
                    <div className="single__block">
                        <div className="single__header">
                            <div className="single__header-tags">
                                <div className="single__tag"># {position.Category.title}</div>
                                {position.Tags.length ? <div className="single__tags tags">
                                    {position.Tags.map(({id, uuid, title, color, Media}) => (
                                        <a href={'/catalog?tags='+id} style={{backgroundColor: color}} className={'filter-tag'}>
                                            {Media[0] ? <img
                                                src={`https://www.inshop-online.com/storage/${uuid}/images/${Media[0].filename}`}
                                                alt={title}/> : null}
                                            <span>{title}</span>
                                        </a>
                                    ))}
                                </div> : null}
                            </div>
                            <div className="single__header-action">
                                {store.hasModule($config.modules.basket) ? <AddBasketBtn /> : <BuyBtn id={position.id} />}
                            </div>
                        </div>
                        <div className="single__info info-product">
                            <h2 className="info-product__title">{position.title}</h2>
                            <div className="info-product__details details">
                                <div className="details__block">
                                    {/*<div className="details__rating rating">*/}
                                    {/*    <div className="rating__body">*/}
                                    {/*        <AiFillStar color={'#ffbc02'} />*/}
                                    {/*        <AiFillStar color={'#ffbc02'} />*/}
                                    {/*        <AiFillStar color={'#ffbc02'} />*/}
                                    {/*        <AiFillStar color={'#ffbc02'} />*/}
                                    {/*        <AiFillStar color={'#ffbc02'} />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="details__block-text">
                                        {/*<div className="details__text">*/}
                                        {/*    <span>Артикул</span>*/}
                                        {/*    <strong>89899</strong>*/}
                                        {/*</div>*/}
                                        {/*<div className="details__text">*/}
                                        {/*    <span>Отзывов</span>*/}
                                        {/*    <strong>89899</strong>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="details__price price">
                                    <div className="price__current">{getDiscountedPrice(position)}{shop.options.currency}</div>
                                    {position.discount ? <del className="price__old">{position.price}{shop.options.currency}</del> : null}
                                </div>
                            </div>
                            <div className="info-product__text">{position.description}</div>
                            {position.properties ? <div className="info-product__table table">
                                {Object.entries(position.properties).map(([key, value], i) => (
                                    <div key={'prop-'+i} className="table__item">
                                        <div className="table__label">{key}</div>
                                        <div className="table__value">{value}</div>
                                    </div>
                                ))}
                            </div> : null}
                        </div>
                    </div>
                    <div className="single__images images-product">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                height: sliderHeight
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="slider"
                            ref={slider}
                        >
                            {position.Media.filter(({name}) => name === 'image').map(({filename}, i) => (
                                <SwiperSlide key={'media-'+i}>
                                    <img src={getImagePath(filename)} alt={position.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={6}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="slider slider-thumbs"
                        >
                            {position.Media.filter(({name}) => name === 'image').map(({filename}, i) => (
                                <SwiperSlide key={'media-'+i}>
                                    <img src={getImagePath(filename)} alt={position.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="single__similar similar">
                    <div className="similar__header">
                        <h3 className="similar__title">Похожие товары</h3>
                        <button className="similar__link" type="button">показать еще</button>
                    </div>
                    <Products products={similarPositions} />
                </div>
                {/*<div className="single__comment comment">*/}
                {/*    <div className="comment__icon">*/}
                {/*        <img className="comment__icon-img" src="img/user/01.jpg" alt="Image" />*/}
                {/*        <img className="comment__icon-flag" src="img/flags/ru.svg" alt="Image" />*/}
                {/*    </div>*/}
                {/*    <div className="comment__body">*/}
                {/*        <div className="comment__header">*/}
                {/*            <div className="comment__title">Комментатор</div>*/}
                {/*            <time>Сегодня в 16:55</time>*/}
                {/*        </div>*/}
                {/*        <div className="comment__rating rating">*/}
                {/*            <div className="rating__body">*/}
                {/*                <div className="rating__item"><img src="img/rating/star_f.svg" alt="Image" />*/}
                {/*                </div>*/}
                {/*                <div className="rating__item"><img src="img/rating/star_f.svg" alt="Image" />*/}
                {/*                </div>*/}
                {/*                <div className="rating__item"><img src="img/rating/star_f.svg" alt="Image" />*/}
                {/*                </div>*/}
                {/*                <div className="rating__item"><img src="img/rating/star_f.svg" alt="Image" />*/}
                {/*                </div>*/}
                {/*                <div className="rating__item"><img src="img/rating/star.svg" alt="Image" /></div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="comment__text">*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta, dolor*/}
                {/*            ducimus hic iusto mollitia nam porro provident quos repudiandae!*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </Layout>
    );
};

export default Position;