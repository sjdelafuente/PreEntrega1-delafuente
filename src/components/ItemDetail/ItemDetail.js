import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import AddButton from '../AddButton/AddButton';
import ItemCount from '../ItemCount/ItemCount';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const ItemDetail = ( { id, img, product, size, color, description, price, stock, category } ) => {

const navigate = useNavigate();

const handleVolver = () => {
    navigate(-1);
}

  return (
    <Card key={ id } style={{ width: '18rem', border: 'none' }} className="pt-5">
        <Card.Img variant="top" src={ img } />
            <Card.Body className="p-1 mt-3">
                <Card.Title>
                    { product }
                </Card.Title>
                <Card.Text>
                    { size }
                </Card.Text>
                <Card.Text>
                    { color }
                </Card.Text>
                <Card.Text>
                    { description }
                </Card.Text>
                <Card.Text>
                    { stock > 0 ? <Alert variant="info">¡Quedan { stock } unidades en stock!</Alert> :  <Alert variant="warning">¡No hay unidades en stock!</Alert>}
                </Card.Text>
                <Card.Text className="fs-3 font-weight-bold">
                    { price }
                </Card.Text>
                
                { stock > 0 ? <ItemCount max={ stock } /> : '' }

                { stock > 0 ? <AddButton /> : '' }

                <Button variant="outline-primary" className="mt-4" onClick={ handleVolver }>Volver</Button>

            </Card.Body>
    </Card>
  )
}

export default ItemDetail