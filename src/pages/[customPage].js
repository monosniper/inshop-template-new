import Layout from "@/components/layout/Layout";
import React, {useEffect} from "react";
import store from "@/store";
import getShop from "@/lib/getShop";
import $config from "@/lib/config";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ req, query: { customPage } }) {
    const rs = await getShop(req)

    if(rs.shop) {
        const { shop } = rs
        let page = shop.Modules.find(({slug}) => $config.modules.custom_pages === slug)

        if(!page) {
            return {
                redirect: {
                    destination: '/not_found',
                    permanent: false,
                },
            }
        } else {
            console.log(page)
            page = page.Shop_Module.options.pages.find(({ slug }) => slug === customPage)
        }

        return { props: {
                ...(await serverSideTranslations(shop.options.language)),
                shop, page
            } };
    } else {
        return rs
    }
}

export default function Home({ shop, page }) {
    useEffect(() => {
        console.log(page)
        store.setShop(shop)
    }, [])

    return (
        <Layout {...page}>
            {page.content}
        </Layout>
    )
}

