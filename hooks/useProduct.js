import React, { useState } from 'react'

export const useProduct = () => {
    const [listProducts, setListProducts] = useState([]);
    const [isLoading, setLoading] = React.useState(false);


    const fetchProducts = React.useCallback (async type => {
        try {
            setLoading(true);
            const resp = await fetch(`/api/product?type=${type || 1}`);
            const data = await resp.json();
            // console.log('----- data ----')
            // console.log(data)
            setListProducts(data || []);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, []);

    return [listProducts, isLoading, fetchProducts];

};