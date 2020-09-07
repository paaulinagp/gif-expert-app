import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en el hook de useFetchGifs', () => {
  test('debe de regresar el estado inicial', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Harry Potter'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('deben agregar un arreglo de imagenes y loading debe ser false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Harry Potter'));

    await waitForNextUpdate();
    const { data, loading } = result.current;



    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
  
})
