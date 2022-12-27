import * as React from 'react';
import Item from '../Item/Item';

const ItemList = ( { products } ) => {

    return (

        <div className="container my-2">
            <section className="row my-4">
                { products.map((prod) => (
                    <Item prod={ prod } />
                )) }
            </section>
        </div>

    )
}

export default ItemList;