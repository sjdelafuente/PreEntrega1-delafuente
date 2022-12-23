import * as React from 'react';
import { reqProducts } from '../../helpers/reqProducts';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        reqProducts()
        .then((res) => {
            setProducts(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    

    return (
        <Container fluid>
            <ItemList products={ products } />
        </Container>
    )

}

export default ItemListContainer;