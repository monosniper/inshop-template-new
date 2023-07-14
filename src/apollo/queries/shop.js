import {gql} from "@apollo/client";

export const GET_SHOP_WITH_POSITIONS = gql`
    query Shop($host: String!, $limit: Int, $offset: Int, $positions_filter: PositionsFilterInput) {
        shop(host: $host, limit: $limit, offset: $offset, positions_filter: $positions_filter) {
            uuid
            options
            Custompages {
                title
                slug
            }
            Categories {
                id
                uuid
                title
                
                Media {
                    name
                    filename
                }
            }
            Tags {
                id
                uuid
                title
                color
                
                Media {
                    name
                    filename
                }
            }
            Modules {
                slug

                Shop_Module {
                    isActive
                    options
                }
            }
            Colors {
                slug

                Shop_Color {
                    value
                }
            }
            Filters {
                id
                slug
            }
            Media {
                name
                filename
            }
            Positions {
                uuid
                id
                type
                price
                discount
                discount_type
                priority
                description
                title
                subtitle
                inStock
                properties
        
                Media {
                    name
                    filename
                }
        
                Category {
                    id
                    title
                    uuid
        
                    Media {
                        name
                        filename
                    }
                }
                
                Tags {
                    id
                    uuid
                    title
                    color
                    
                    Media {
                        name
                        filename
                    }
                }
            }
        }
    }
`

export const GET_SHOP = gql`
    query Shop($host: String!) {
        shop(host: $host) {
            uuid
            options
            Custompages {
                title
                slug
            }
            Categories {
                id
                uuid
                title
                
                Media {
                    name
                    filename
                }
            }
            Tags {
                id
                uuid
                title
                color
                
                Media {
                    name
                    filename
                }
            }
            Modules {
                slug

                Shop_Module {
                    isActive
                    options
                }
            }
            Colors {
                slug

                Shop_Color {
                    value
                }
            }
            Filters {
                id
                slug
            }
            Media {
                name
                filename
            }
        }
    }
`

export const GET_POSITION = gql`
    query Position($id: ID!) {
        position(id: $id) {
            uuid
            id
            type
            price
            discount
            discount_type
            priority
            description
            title
            subtitle
            inStock
            properties
    
            Media {
                name
                filename
            }
            
            Tags {
                id
                uuid
                title
                color
                
                Media {
                    name
                    filename
                }
            }
    
            Category {
                id
                title
                uuid
    
                Media {
                    name
                    filename
                }
            }
        }
    }
`

export const GET_POSITIONS = gql`
    query Positions($host: String, $limit: Int, $offset: Int, $categoryId: ID) {
        positions(host: $host, limit: $limit, offset: $offset, categoryId: $categoryId) {
            uuid
            id
            type
            price
            discount
            discount_type
            priority
            description
            title
            subtitle
            inStock
            properties
    
            Media {
                name
                filename
            }
            
            Tags {
                id
                uuid
                title
                color
                
                Media {
                    name
                    filename
                }
            }
    
            Category {
                id
                title
                uuid
    
                Media {
                    name
                    filename
                }
            }
        }
    }
`

