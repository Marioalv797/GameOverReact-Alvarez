import React from 'react'
import { getProducts } from "../../stock"
import { useState, useEffect } from 'react'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return(
        <div>
            <h1>{greeting}</h1>
            <ul>
                {products.map(product => <li key={product.id}></li>)}
            </ul>
        </div>

    )
}

export default ItemListContainer