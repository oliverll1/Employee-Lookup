import { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../shared';

const LookupContainer = styled.div`
  margin-top: 20px;
`;

interface Props {
  onLookup: (employeeId: string) => void;
  clearEmployee: () => void;
}

function EmployeeLookup({ clearEmployee, onLookup }: Props) {
  const [employeeId, setEmployeeId] = useState<string>('');

  const handleLookup = () => {
    console.log(employeeId);
    onLookup(employeeId);
  };

  const handleClear = () => {
    clearEmployee();
    setEmployeeId('');
  };

  return (
    <LookupContainer>
      <Input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter Employee ID"
        data-testid="employee-id-input"
      />
      <Button onClick={handleLookup} data-testid="lookup-button">Lookup</Button>
      <Button
        $backgroundColor="danger"
        $hoverColor="dangerDarker"
        onClick={handleClear}
        data-testid="clear-button"
      >
        Clear
      </Button>
    </LookupContainer>
  );
}

export default EmployeeLookup;
