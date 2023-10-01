import { fireEvent, render, screen } from '@testing-library/react';
import SearchField from '.';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

test('it render SearchField', async () => {
  render(<SearchField />);
  const inputElem: HTMLInputElement = screen.getByRole('textbox');
  fireEvent.change(inputElem, { target: { value: 'Notebook' } });
  expect(inputElem.value).toBe('Notebook');
  fireEvent.change(inputElem, { target: { value: '' } });
  expect(inputElem.value).toBe('');

  const buttonElem = screen.getByRole('button');
  const iconElem = screen.getByRole('img');
  expect(buttonElem).toBeInTheDocument();
  expect(iconElem).toBeInTheDocument();
});
