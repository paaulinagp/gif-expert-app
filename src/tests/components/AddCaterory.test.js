import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCaterory';

describe('Pruebas del componente <AddCategory />', () => {
  
  const setCategories = jest.fn();

  let wrapper;

  beforeEach(() => {
    // Limpia todos los mocks
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

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

  test('no debe enviar el valor en submit', () => {
    const event = {
      preventDefault(){}
    }
    
    //Submit de formulario
    wrapper.find('form').simulate('submit', event);

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe enviar el valor en submit', () => {
    const eventForm = { preventDefault(){} };
    const eventInput = { target: { value: 'Hola mundo' } };

    wrapper.find('input').simulate('change', eventInput );

    //Submit de formulario
    wrapper.find('form').simulate('submit', eventForm);

    // Evaluar que se llame la función
    expect(setCategories).toHaveBeenCalled();
    // Evaluar el numero de veces que se llama la funcion
    expect(setCategories).toHaveBeenCalledTimes(1);
    //Evaluar que sea una funcion
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
