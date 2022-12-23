import * as React from 'react';
import Item from '../Item/Item';

const ItemList = ( { products } ) => {

    return (

        <div className="container my-5">
            <h2>Nuestros Productos</h2>
            <hr/>
            <section className="row my-4">
                { products.map((prod) => (
                    <Item prod={ prod } />
                )) }
            </section>
        </div>

    )
}

export default ItemList;