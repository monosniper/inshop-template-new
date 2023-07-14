export default function getDiscountedPrice(position) {
    return position.discount ?
        (position.discount_type === 'AMOUNT'
            ? position.price - position.discount
            : position.price - (position.price / 100 * position.discount))
        : position.price
}