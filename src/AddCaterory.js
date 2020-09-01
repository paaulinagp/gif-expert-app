import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event)=> {
    event.preventDefault();
    if(inputValue.trim().length > 0){
      setCategories(categories => [...categories, inputValue]);
      setInputValue('');
    }

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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;