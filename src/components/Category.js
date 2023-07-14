import React, {useCallback} from 'react';
import categoryImg from '@/assets/img/category.png'
import Image from "next/image";
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";

const Category = ({ category }) => {
    const searchParams = useSearchParams();

    const image = category.Media && category.Media.length && category.Media.find(media => media.name === 'image') ? [
        category.Media.find(media => media.name === 'image').filename
    ] : []

    const getImagePath = () => {
        return image.length ? `https://www.inshop-online.com/storage/${category.uuid}/images/${image[0]}` : categoryImg
    }

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    return <Link
            href={'/catalog?' + createQueryString('category', category.id)}
            className={"side-menu__link " + (searchParams.get('category') === category.id ? 'active' : '')}
        >
            <li className="side-menu__item">
                <Image width={25} height={20} src={getImagePath()} alt={category.title} />
                <span>{category.title}</span>
            </li>
        </Link>;
};

export default Category;