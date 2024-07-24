import { validateRequest } from '../validateRequest';
import { Request, Response, NextFunction } from 'express';
import { ContextRunner } from 'express-validator';

describe('validateRequest', () => {
    let req: Request;
    let res: Response;
    let next: NextFunction;

    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;
        next = jest.fn();
    });

    it('should call next if all validations pass', async () => {
        const validation1 = {
            run: jest.fn().mockResolvedValue({ isEmpty: jest.fn().mockReturnValue(true), array: jest.fn() }),
        } as ContextRunner;
        const validation2 = {
            run: jest.fn().mockResolvedValue({ isEmpty: jest.fn().mockReturnValue(true), array: jest.fn() }),
        } as ContextRunner;

        await validateRequest([validation1, validation2])(req, res, next);

        expect(next).toHaveBeenCalled();
    });

    it('should return a 400 error if any validation fails', async () => {
        const validation1 = {
            run: jest.fn().mockResolvedValue({ isEmpty: jest.fn().mockReturnValue(false), array: jest.fn(() => [{ msg: 'error' }]) }),
        } as ContextRunner;
        const validation2 = {
            run: jest.fn().mockResolvedValue({ isEmpty: jest.fn().mockReturnValue(true), array: jest.fn() }),
        } as ContextRunner;

        await validateRequest([validation1, validation2])(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ errors: expect.any(Array) });
        expect(next).not.toHaveBeenCalled();
    });
});