import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCaterory';

describe('Pruebas del componente <AddCategory />', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  
  test('debe mostrar el componente correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = "Hola mundo";
    const event = { target: { value } };

    input.simulate('change', event );
    
    expect(wrapper.find('h1').text().trim()).toBe(value);
  });
  
});
