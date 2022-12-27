import * as React from 'react';
import { reqProducts } from '../../helpers/reqProducts';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ( { greeting } ) => {

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
            <div className="container pt-5">
                <div className="row justify-content-start">
                    <div className="col-lg-6">
                        <h2 className="title"> { greeting } </h2>
                        <hr/>
                    </div>
                </div>
            </div>
            <ItemList products={ products } />
        </Container>
    )

}

export default ItemListContainer;