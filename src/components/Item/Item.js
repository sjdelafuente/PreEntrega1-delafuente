import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ( { prod } ) => {

    return (

        <Card key={ prod.id } style={{ width: '18rem', border: 'none' }} className="pt-5">
            <Card.Img variant="top" src={ prod.img } />
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
                    <Card.Text className="fs-1 font-weight-bold">
                        { prod.price }
                    </Card.Text>
                    <Button variant="primary" className="mt-3">Ver Más</Button>
                </Card.Body>
        </Card>

    )

}

export default Item;