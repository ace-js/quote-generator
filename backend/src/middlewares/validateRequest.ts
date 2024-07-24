import { Request, Response, NextFunction } from 'express';
import { ContextRunner } from 'express-validator';

export const validateRequest = (validations: ContextRunner[]) => async (req: Request, res: Response, next: NextFunction) => {
    // sequential processing, stops running validations chain if one fails.
    const errors = [];
    for (const validation of validations) {
        const result = await validation.run(req);
        if (!result.isEmpty()) {
            // add validation errors to errors array
            errors.push(...result.array());
        }
    }
    // if any validation fails, return a 400 error
    if (errors.length) {
        return res.status(400).json({ errors });
    }

    next();
};

