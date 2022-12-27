import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { BsFillCartFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CartWidget = () => {

    return (
        <Dropdown className="me-5">
            <Dropdown.Toggle className="d-flex align-items-center" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <BsFillCartFill className="me-1 fs-2" style={{ color: '#181B23' }} />
                <Badge className="bg-danger">1</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu align={{ lg: 'end' }} className="me-3 p-3 mt-3" >
                <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Img variant="top" src="./img/01.png" />
                <Card.Body className="p-1 mt-3">
                    <Card.Title>Remera Algodón</Card.Title>
                    <Card.Text>
                        Remera de Algodón con diseño clásico de Isabel Sarli, en homenaje a la actriz Argentina.
                    </Card.Text>
                    <Card.Text className="fs-1 font-weight-bold">$2999</Card.Text>
                    <Button variant="success" className="mt-3">Finalizar Compra</Button>
                </Card.Body>
                </Card>
            </Dropdown.Menu>
        </Dropdown>
    )

}

export default CartWidget;