import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import '@testing-library/jest-dom';

describe('Pruebas del componente <GifExpertApp />', () => {
  test('debe cargar correctamente el componente', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar un arreglo de categorias', () => {
    const categories= ['Harry Potter', 'Hermione', 'Ron'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
