import React from 'react';
import Link from "next/link";

const BuyBtn = ({ id }) => {
    return <Link href={'/order?id='+id}>
        <button className="single__btn button" type="button">Купить</button>
    </Link>;
};

export default BuyBtn;