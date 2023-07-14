const getQuery = (url) => {
    const query = {}

    const queryString = url.split('?')[1]

    if(queryString) {
        const items = queryString.split('&').map(item => item.split('='))
        items.forEach(([key, value]) => {
            query[key] = value
        })
    }

    return query
}

export default getQuery