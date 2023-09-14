import React, {useEffect, useState} from 'react';

import axios from "axios";
import {PRODUCTS_URL} from "./constants/api.constants";


 const useProducts = () => {
    const [product, setProduct] = useState<[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoding] = useState<boolean>(true)

    const fetchProducts = () => {
        try {
            axios.get(PRODUCTS_URL).then((response) => {
                const result = response.data
                setProduct(result)
                setLoding(false)
            })
        } catch (error) {
            setError(`Something went wrong! Error: ${error}`)
            setLoding(false)
        }
    }

    useEffect(( ) => {
        fetchProducts()
    }, [])

    return {product, error, loading}
}

export default useProducts;