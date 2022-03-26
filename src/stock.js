const products = [
    { 
        id: 1, 
        stock: 5
    },
    { 
        id: 2,
        stock: 3
    },
    { 
        id: 3,
        stock: 10
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}