import { useState, useEffect } from 'react';
import { reqProducts } from '../../helpers/reqProducts';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        reqProducts()
        .then((res) => {
            if (categoryId) {
                setProducts( res.filter(product => product.category == categoryId) )
            }else{
                setProducts(res)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [categoryId])
    

    return (
        <Container fluid>
            <ItemList products={ products } />
        </Container>
    )

}

export default ItemListContainer;