import client from "@/apollo/client";
import {GET_SHOP, GET_SHOP_WITH_POSITIONS} from "@/apollo/queries/shop";

async function getShop(req, options={}) {
    const { positions, positions_filter } = options
    let host = req.headers.host

    try {
        const { data: { shop } } = await client.query({
            query: positions ? GET_SHOP_WITH_POSITIONS : GET_SHOP,
            variables: {host, positions_filter},
            fetchPolicy: "no-cache"
        });

        if(!shop) {
            return {
                redirect: {
                    destination: '/not_found',
                    permanent: false,
                },
            };
        }

        return {shop}
    } catch (e) {
        console.log(e)
        console.log(e.networkError.result)
    }

    return {}
}

export default getShop