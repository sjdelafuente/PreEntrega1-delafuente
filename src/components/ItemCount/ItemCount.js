import { useState } from "react";
import Item from "../Item/Item";

const ItemCount = ( { max } ) => {

  const [counter, setCounter] = useState(0);

  const suma = () => {
    return setCounter(counter + 1);
  };

  const resta = () => {
    if (counter == 0) {
      return counter;
    } else {
      return setCounter(counter - 1);
    }
  };


  return (

    <div className='container p-0 border rounded d-flex justify-content-around align-items-center'>
        <div><button className='btn' onClick={resta}><h6 style={{ fontWeight: '700', fontSize: '28px', color: 'green' }}>-</h6></button></div>
        <div className='mt-2'><h6 style={{ fontWeight: '700', fontSize: '18px' }}> { counter } </h6></div>
        <div><button className='btn' onClick={suma} disabled={counter === { max }.max}><h6 style={{ fontWeight: '700', fontSize: '28px', color: 'green' }}>+</h6></button></div>
    </div>
  
  );
};

export default ItemCount;