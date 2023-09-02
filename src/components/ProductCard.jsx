import React, { useState } from 'react';

const ProductCard = (props) => {
  const [showCounter, setShowCounter] = useState(false); // Состояние для показа счетчика
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
    else {
        setShowCounter();
    }
  }

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    
    <div className="product-card pl-4 pt-2 h-max w-max font-roboto  ">
      <div className='flex justify-start'>
        <img src={props.image} alt={props.title} className=" product-image rounded-lg w-20 h-20  bg-gray-200" />
      </div>
      <h2 className="product-title text-gray-600 text-xxs pt-1.5 font-roboto font-bold ">{props.title}</h2>
      <p className="product-weight text-xxxs text-gray-800 font-medium  ">{props.weight} кг.</p>
      <p className="product-price text-xxxs text-gray-800 font-medium">{props.price.toFixed(2)}&nbsp;₸</p>
      <div className="flex justify-center pt-1">
      {showCounter ? (
        <div className="quantity-controls bg-customgreen text-white  w-max h-min text-xxs rounded-lg  pw-max">
          <div className='flex justify-center'><button className="quantity-button mr-3 ml-1" onClick={decrement}>-</button>
                <p className="product-quantity ">{count} шт.</p>
                <button className="quantity-button ml-3 mr-1" onClick={increment}>+</button>
          </div>
          </div>
    
       
      
        

        
      ) : (
        <div className='flex justify-center'><button className="add-to-cart-button text-xxs pl-1 pr-1 text-center bg-gray-200 rounded-lg  w-max h-max" onClick={toggleCounter}>
          Добавить  +
        </button></div>
      )}
    </div>
  </div>
  
  );
 
}


export default ProductCard;
