import { SignUp } from '../controllers/User'; // Import your controller function
import { User } from '../models/User'; // Import your User model
import { Request, Response } from 'express'; // Assuming you're using Express
import { genSalt, hash } from 'bcrypt'; // Import bcrypt functions

// Mocking bcrypt functions
jest.mock('bcrypt', () => ({
    genSalt: jest.fn(),
    hash: jest.fn(),
}));

// Mocking User model methods
jest.mock('../models/User', () => ({
    User: {
        create: jest.fn(),
    },
}));

describe('SignUp controller', () => {
    let req: Partial<Request>, res: Partial<Response>;

    beforeEach(() => {
        req = {
            body: {
                username: 'testUser',
                email: 'test@example.com',
                password: 'password123',
            },
        };
        res = {
            status: jest.fn(),
            json: jest.fn(),
        };
    });

    it('should register a user successfully', async () => {
        (genSalt as jest.Mock).mockResolvedValue('mockedSalt');
        (hash as jest.Mock).mockResolvedValue('mockedHash');
        (User.create as jest.Mock).mockResolvedValueOnce({});

        await SignUp(req as Request, res as Response);

        expect(genSalt).toHaveBeenCalledWith(10);
        expect(hash).toHaveBeenCalledWith('password123', 'mockedSalt');
        expect(User.create).toHaveBeenCalledWith({
            username: 'testUser',
            email: 'test@example.com',
            password: 'mockedHash',
        });
        expect(res!.status).toHaveBeenCalledWith(201);
        expect(res!.json).toHaveBeenCalledWith({ success: true, message: 'User registered successfully' });
    });

    it('should return 500 status if an error occurs during user creation', async () => {
        (genSalt as jest.Mock).mockResolvedValue('mockedSalt');
        (hash as jest.Mock).mockResolvedValue('mockedHash');
        const errorMessage = 'Mocked error message';
        (User.create as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

        

        await expect(() => SignUp(req as Request, res as Response)).rejects.toThrowError("User not registered Error: " + errorMessage);

        // Verifying that the response status is set to 500
        expect(res!.status).toHaveBeenCalledWith(500);
    });
});
