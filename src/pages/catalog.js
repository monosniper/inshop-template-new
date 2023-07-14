import React, {useEffect, useState} from 'react';
import Layout from "@/components/layout/Layout";
import Products from "@/components/Products";
import store from "@/store";
import getShop from "@/lib/getShop";
import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const MultiValueLabel = (props) => {
    const image = props.data.Media[0]

    return (
        <components.MultiValueLabel {...props}>
            <div className={'filter-tag'}>
                {image ? <img src={`https://www.inshop-online.com/storage/${props.data.uuid}/images/${image.filename}`} alt={props.data.title}/> : null}
                <span>{props.data.title}</span>
            </div>
        </components.MultiValueLabel>
    );
};

const animatedComponents = makeAnimated({MultiValueLabel});

export async function getServerSideProps({ req }) {
    const rs = await getShop(req, {
        positions: true,
        positions_filter: {
            categoryId: req.query?.category
        }
    })

    return rs.shop ? { props: {
        ...(await serverSideTranslations(rs.shop.options.language)),
        shop: rs.shop
    } } : rs;
}

const Catalog = ({ shop }) => {
    const [products, setProducts] = useState([])

    const { t } = useTranslation()

    const sortOptions = [
        { value: 'newest', label: 'Newest' },
        { value: 'cheaper', label: 'Cheaper' },
        { value: 'richer', label: 'Richer' },
        { value: 'a-z', label: 'Alphabet (a-z)' },
        { value: 'z-a', label: 'Alphabet (z-a)' },
    ]

    const [sort, setSort] = useState(sortOptions[0])
    const [priceFrom, setPriceFrom] = useState()
    const [priceTo, setPriceTo] = useState()
    const [tags, setTags] = useState([])

    useEffect(() => {
        setProducts(shop.Positions.filter(pos => pos.type === store.PRODUCT_TYPE))
        store.setShop(shop)
    }, [])

    const handleReset = () => {
        setSort(sortOptions[0])
        setPriceFrom(0)
        setPriceTo(0)
        setTags([])
    }

    const tagsOptions = shop.Tags.map(tag => {
        tag.value = tag.id
        tag.label = tag.title

        return tag
    })

    return (
        <Layout>
            <div className="products">
                <form action="#" className="products__filter filter">
                    <div className="filter__items" data-one-select>
                        <div className="filter__item">
                            <Select
                                instanceId={'sort'}
                                value={sort}
                                onChange={setSort}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        // ...baseStyles,
                                        cursor: "pointer",
                                        display: 'flex',
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 25px -12px rgba(0, 0, 0, 0.25)',
                                        borderRadius: 9,
                                        borderColor: 'transparent',
                                        width: 160,
                                        outline: 'none'
                                    }),
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderRadius: 9
                                    }),
                                }}
                                options={sortOptions}
                            />
                        </div>
                        <div className="filter__item">
                            <input value={priceFrom}
                                onChange={({ target: { value }}) => setPriceFrom(value)}
                                className="input"
                                autoComplete="off"
                                type="number"
                                data-error="Ошибка"
                                placeholder="0₽"
                            />
                            <input value={priceTo}
                                onChange={({ target: { value }}) => setPriceTo(value)}
                                className="input"
                                autoComplete="off"
                                type="number"
                                data-error="Ошибка"
                                placeholder="0₽"
                            />
                        </div>
                        {/*<div className="filter__item">*/}
                        {/*    <Select*/}
                        {/*        closeMenuOnSelect={false}*/}
                        {/*        components={animatedComponents}*/}
                        {/*        value={tags}*/}
                        {/*        isMulti*/}
                        {/*        options={tagsOptions}*/}
                        {/*        onChange={setTags}*/}
                        {/*        styles={{*/}
                        {/*            control: (baseStyles, state) => ({*/}
                        {/*                cursor: "pointer",*/}
                        {/*                display: 'flex',*/}
                        {/*                background: '#FFFFFF',*/}
                        {/*                boxShadow: '0px 4px 25px -12px rgba(0, 0, 0, 0.25)',*/}
                        {/*                borderRadius: 9,*/}
                        {/*                borderColor: 'transparent',*/}
                        {/*                width: 300,*/}
                        {/*                outline: 'none',*/}
                        {/*                minHeight: 38*/}
                        {/*            }),*/}
                        {/*            multiValueLabel: (base, item) => ({*/}
                        {/*                ...base,*/}
                        {/*                backgroundColor: item.data.color,*/}
                        {/*                color: 'white',*/}
                        {/*            }),*/}
                        {/*            menu: (baseStyles, state) => ({*/}
                        {/*                ...baseStyles,*/}
                        {/*                borderRadius: 9*/}
                        {/*            }),*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                    <button className="filter__btn" onClick={handleReset} type={"button"}>сбросить</button>
                </form>

                <Products
                    products={products}
                />
            </div>
        </Layout>
    );
};

export default Catalog;