import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { UserInterface } from '../interfaces';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const userSchema = Joi.object<UserInterface>({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
  }).messages({
    'string.empty': '{{#label}} is required',
    'any.required': '{{#label}} is required',
  });
  const login = req.body;
  const { error } = userSchema.validate(login);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};

export default loginValidation;