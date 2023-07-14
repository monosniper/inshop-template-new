import client from "@/apollo/client";
import {GET_POSITIONS, GET_SHOP, GET_SHOP_WITH_POSITIONS} from "@/apollo/queries/shop";

async function getPositions(req, options={}) {
    let host = req.headers.host

    try {
        const { data: { positions } } = await client.query({
            query: GET_POSITIONS,
            variables: {host, ...options},
            fetchPolicy: "no-cache"
        });

        return {positions}
    } catch (e) {
        console.log(e)
        console.log(e.networkError.result)
    }

    return {}
}

export default getPositions