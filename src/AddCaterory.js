import React, { useState } from 'react';

const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hola mundo');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const handleSubmit = (event)=> {
    event.preventDefault();
    console.log('submit hecho');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h1>{inputValue}</h1>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange }
      />
    </form>
  )  
};

export default AddCategory;