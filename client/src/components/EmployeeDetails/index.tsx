interface Employee {
  id: string;
  fullName: string;
  birthDate: string;
}

interface EmployeeDetailsProps {
  employee: Employee | null;
}

function EmployeeDetails({ employee }: EmployeeDetailsProps) {
 
  if (!employee) {
    return null;
  }


  return (
    <div>
      <p data-testid="employee-id"><strong>ID:</strong> {employee.id}</p>
      <p data-testid="employee-full-name"><strong>Full Name:</strong> {employee.fullName}</p>
      <p data-testid="employee-birth-date"><strong>Birth Date:</strong> {employee.birthDate}</p>
    </div>
  );
}

export default EmployeeDetails;
