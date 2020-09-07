import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); // Se mockean los datos del hook

describe('Pruebas unitarias de componente <GifGrid />', () => {
  let wrapper;
  const category = "Category";

  test('debe cargar correctamente el componente ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuanso se cargan las imagenes', () => {
    useFetchGifs.mockReturnValue({
      data: [{
        id: 'ABC',
        title: 'Titulo',
        url: 'https://dato.com'
      }],
      loading: false
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
})
