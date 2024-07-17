
import request from 'supertest';
import app from '../../app';

describe('GET /api/employees/:id', () => {
  test('should respond with employee details if found', async () => {
    const response = await request(app).get('/api/employees/1');
    expect(response.status).toBe(200);
    expect(response.body.fullName).toBe('John Doe');
  });

  test('should respond with 404 if employee not found', async () => {
    const response = await request(app).get('/api/employees/999');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Employee not found');
  });
});
