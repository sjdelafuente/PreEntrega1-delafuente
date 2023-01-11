import Card from 'react-bootstrap/Card';
import AddButton from '../AddButton/AddButton';
import ItemCount from '../ItemCount/ItemCount';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const Item = ( { prod } ) => {

    return (

        <Card key={ prod.id } style={{ width: '18rem', border: 'none' }} className="pt-5">
            <Link to={`/detail/${prod.id}`}><Card.Img variant="top" src={ prod.img } /></Link>
                <Card.Body className="p-1 mt-3">
                    <Card.Title>
                        { prod.product_name }
                    </Card.Title>
                    <Card.Text>
                        { prod.size }
                    </Card.Text>
                    <Card.Text>
                        { prod.product_color }
                    </Card.Text>
                    <Card.Text>
                        { prod.description }
                    </Card.Text>
                    <Card.Text>
                        { prod.stock > 0 ? <Alert variant="info">¡Quedan {prod.stock} unidades en stock!</Alert> :  <Alert variant="warning">¡No hay unidades en stock!</Alert>}
                    </Card.Text>
                    <Card.Text className="fs-3 font-weight-bold">
                        { prod.price }
                    </Card.Text>
                    
                    { prod.stock > 0 ? <ItemCount max={ prod.stock } /> : '' }

                    { prod.stock > 0 ? <AddButton /> : '' }

                </Card.Body>
        </Card>

    )

}

export default Item;