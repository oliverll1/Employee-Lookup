import { render } from '@testing-library/react';
import EmployeeDetails from '../EmployeeDetails';
import '@testing-library/jest-dom'; 
import 'jest-styled-components'; 

describe('EmployeeDetails', () => {
  test('should render employee details correctly', () => {
    const employee = {
      id: '123',
      fullName: 'John Doe',
      birthDate: '1990-01-01',
    };

    const { getByTestId } = render( <EmployeeDetails employee={employee} />);

    expect(getByTestId('employee-id')).toHaveTextContent('ID: 123');
    expect(getByTestId('employee-full-name')).toHaveTextContent('Full Name: John Doe');
    expect(getByTestId('employee-birth-date')).toHaveTextContent('Birth Date: 1990-01-01');
  });

  test('should not render anything if employee data is null', () => {
    const { container } = render(  <EmployeeDetails employee={null} />);
    expect(container.firstChild).toBeNull();
  });
});
