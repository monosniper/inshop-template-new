import React from 'react';
import store from "@/store";
import Category from "@/components/Category";
import {observer} from "mobx-react-lite";

const Categories = () => {
    return <>
        {store.categories.map(category => <Category key={category.id} category={category} />)}
    </>;
};

export default observer(Categories);