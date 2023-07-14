import client from "@/apollo/client";
import {GET_POSITION} from "@/apollo/queries/shop";

async function getPosition(id) {
    try {
        const { data: { position } } = await client.query({
            query: GET_POSITION,
            variables: {id},
            fetchPolicy: "no-cache"
        });

        return {position}
    } catch (e) {
        console.log(e)
        console.log(e.networkError.result)
    }

    return {}
}

export default getPosition