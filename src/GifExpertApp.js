import React, {useState} from 'react';
import AddCategory from './AddCaterory';

const GifExpertApp = () => {

  // const categories = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];

  const [categories, setCategories] = useState(['Harry Potter', 'Hermione Granger', 'Ron Weasley']);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Prueba'])
  //   setCategories(cats => [...cats, 'Prueba'])
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>
      
      <ol>
        {
          categories.map( (category) => {
            return (<li key={ category }>{ category} </li>)
          })
        }
      </ol>
    </>
  );
};

export default GifExpertApp;