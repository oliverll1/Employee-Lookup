import { Request, Response } from 'express';

interface Employee {
  id: string;
  fullName: string;
  birthDate: string;
}

export const mockEmployees: Employee[] = [
  { id: '1', fullName: 'John Doe', birthDate: '1990-01-01' },
  { id: '2', fullName: 'Jane Smith', birthDate: '1985-05-15' },
  { id: '3', fullName: 'Michael Johnson', birthDate: '1988-09-30' },
];

export const getEmployeeById = (req: Request, res: Response) => {
  const employeeId = req.params.id;
  const employee = mockEmployees.find(emp => emp.id === employeeId);

  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  res.json(employee);
};
