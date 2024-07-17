import express from 'express';
import { getEmployeeById, mockEmployees } from '../controllers/employeeController';

const router = express.Router();

router.get('/', (_req, res) => {
    res.json(mockEmployees);
});

router.get('/:id', getEmployeeById);

export default router;
