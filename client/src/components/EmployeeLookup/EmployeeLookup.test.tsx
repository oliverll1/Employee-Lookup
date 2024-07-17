import { render, fireEvent } from '../../test-utils';
import EmployeeLookup from '../EmployeeLookup';
import '@testing-library/jest-dom'; 
import 'jest-styled-components';

describe('EmployeeLookup', () => {
  test('should update input value correctly', () => {
    const onLookup = jest.fn();
    const clearEmployee = jest.fn();

    const { getByTestId } = render( 
      <EmployeeLookup onLookup={onLookup} clearEmployee={clearEmployee} />
    );

    const input = getByTestId('employee-id-input');
    fireEvent.change(input, { target: { value: '123' } });

    expect(input).toHaveValue('123');
  });

  test('should call onLookup with correct employee id when Lookup button is clicked', () => {
    const onLookup = jest.fn();
    const clearEmployee = jest.fn();

    const { getByTestId } = render(
      <EmployeeLookup onLookup={onLookup} clearEmployee={clearEmployee} />
    );

    const input = getByTestId('employee-id-input');
    fireEvent.change(input, { target: { value: '123' } });

    const lookupButton = getByTestId('lookup-button');
    fireEvent.click(lookupButton);

    expect(onLookup).toHaveBeenCalledWith('123');
  });
});
