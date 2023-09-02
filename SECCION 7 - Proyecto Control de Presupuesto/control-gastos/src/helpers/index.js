// const formatNumberToEUR = (quantity) => {
//     return quantity.toLocaleString("es-ES", {
//         style: "currency",
//         currency: "EUR",
//     });
// };

// export { formatNumberToEUR };

export const formatNumberToEUR = (quantity) => {
    return quantity.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
};

export const formatDate = (date) => {
    const newDate = new Date(date);
    const config = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('es-ES', config)
}

export const generateRandomId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
}
