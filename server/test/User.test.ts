import request from 'supertest';
import express, { Router } from 'express';
import { Response, Request } from 'express';
import UserRoutes from '../routes/User'; 
import { SignUp, SignIn, logout } from '../controllers/User';
import authorize from '../middlewares/User';

jest.mock('../controllers/User', () => ({
  SignUp: jest.fn(),
  SignIn: jest.fn(),
  logout: jest.fn(),
}));

jest.mock('../middlewares/User', () => ({
  ExisteUser: jest.fn(),
}));

describe('UserRoutes', () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use(express.json()); 
    app.use('/', UserRoutes);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call SignUp controller when /signup endpoint is hit', async () => {
    await request(app).post('/signup');
    expect(SignUp).toHaveBeenCalledTimes(1);
  });

  it('should call SignIn controller when /signin endpoint is hit', async () => {
    await request(app).post('/signin');
    expect(SignIn).toHaveBeenCalledTimes(1);
  });

  it('should call logout controller when /logout endpoint is hit', async () => {
    await request(app).get('/logout');
    expect(logout).toHaveBeenCalledTimes(1);
  });

  // it('should call authorize middleware when / endpoint is hit', async () => {
  //   const mockReq = {} as Request;
  //   const mockRes = {} as Response;
  //   const mockNext = jest.fn();

  //   await request(app).get('/');
  //   expect(authorize).toHaveBeenCalledWith(['admin', 'user'], ['read']);
  // });

  it('should return 200 and success message when / endpoint is hit', async () => {
    const mockReq = {} as Request;
    const mockRes = {} as Response;

    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, message: 'Protected route accessed' });
  });
});
