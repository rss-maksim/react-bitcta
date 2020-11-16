export const formatPrice = (price: string, currency: string) => {
    if (price) {
        return `${Number(price).toFixed(2)} ${currency}`
    }
    return price
}