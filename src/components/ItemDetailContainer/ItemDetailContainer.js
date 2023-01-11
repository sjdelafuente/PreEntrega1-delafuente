import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reqProdById } from '../../helpers/reqProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    reqProdById( Number(productId) )
      .then((data) => {
        setProduct(data)
      })
  }, [productId])

return (
    <div className="container my-5">
      {
        product && <ItemDetail { ...product } />
      }
    </div>
  )

}

export default ItemDetailContainer
