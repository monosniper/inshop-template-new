import React from 'react';
import shop from "@/store";
import Link from "next/link";
import getDiscountedPrice from "@/utils/getDiscountedPrice";
import {observer} from "mobx-react-lite";

const Product = ({ product }) => {
    const thumb = product.Media && product.Media.length && product.Media.find(media => media.name === 'thumb') ? [
        product.Media.find(media => media.name === 'thumb').filename
    ] : []

    const getThumbPath = (uuid=product.uuid, image = thumb) => {
        return image.length ? `https://www.inshop-online.com/storage/${uuid}/images/${image[0]}` : '/assets/img/product.png'
    }

    return (
        <Link href={"/catalog/" + product.id}>
            <article className={"product " + (product.discount ? "product_discount" : '')}>
                <div className="product__img-bg">
                    <img src={getThumbPath()} alt={product.title} />
                </div>
                <div className="product__img -ibg">
                    <img src={getThumbPath()} alt={product.title} />
                </div>
                <div className="product__overlay overlay">
                    <div className="overlay__action">
                        {/*<button className="overlay__btn btn-fav" type="submit"><i*/}
                        {/*    className="_icon-fav"></i><i className="_icon-fav_f"></i></button>*/}
                    </div>
                    <div className="overlay__footer">
                        <div className="overlay__title">{product.title}</div>
                        <div className="overlay__price-group">
                            <div className="overlay__price">{getDiscountedPrice(product)}{shop.options.currency}</div>
                            {product.discount ? <del className="overlay__discount">{product.price}{shop.options.currency}</del> : null}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default observer(Product);