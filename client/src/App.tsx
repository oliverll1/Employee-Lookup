import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import EmployeeLookup from './components/EmployeeLookup';
import EmployeeDetails from './components/EmployeeDetails';


const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.primary};
  margin-top: 50px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  font-family: ${props => props.theme.fonts.primary};
  margin-top: 50px;
`;

interface Employee {
  id: string;
  fullName: string;
  birthDate: string;
}

function App() {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [error, setError] = useState<string>('');

  const handleLookup = async (employeeId: string) => {
    setEmployee(null);
    if (employeeId.length === 0) {
      setError('Please enter an employee ID');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/employees/${employeeId}`);
      const data = await res.json();

      if (!res.ok) {
        let errorMessage = '';
        if (res.status === 400) {
          errorMessage = data.message || 'Bad request: Invalid employee ID';
        } else if (res.status === 404) {
          errorMessage = data.message || 'Employee not found';
        } else if (res.status === 500) {
          errorMessage = 'Internal server error';
        } else {
          errorMessage = 'An error occurred';
        }
       
        setError(errorMessage);
        return;
      }

      setEmployee(data);
      setError('');
    } catch (error) {
      if (error instanceof Error) {
        setError('An error occurred');
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const clearEmployee = () => {
    setEmployee(null);
    setError('');
  };

  return (
    <OuterContainer>
      <InnerContainer>
      <h1>Employee Lookup</h1>
      <EmployeeLookup clearEmployee={clearEmployee} onLookup={handleLookup} />
      
      {employee ? (
        <EmployeeDetails employee={employee} />
      ) : error ? (
        <p>{error}</p>
      ) : null}
      </InnerContainer>
    </OuterContainer>
  );
}

export default App;
