import MOCK_DATA from '../data/MOCK_DATA.json'

export const reqProducts = () => {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(MOCK_DATA)
        }, 500)
    })

}

export const reqProdById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const product = MOCK_DATA.find((el) => el.id === id)

            if (product) {
                resolve(product)
            } else {
                reject({
                    error: 'No se encontró ese producto'
                })
            }
        }, 500)
    })
}