import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem  from '../../components/GifGridItem';

describe('Pruebas del componente <GifGridItem /> ', () => {
  const title = 'Un titulo';
  const url = 'http://localhost/img.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el titulo', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe(title);
  });

  test('debe de tener una imagen igual al url y al alt de los props', () => {
    const img = wrapper.find('img');
    expect( img.props().src ).toBe(url);
    expect( img.props().alt ).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
