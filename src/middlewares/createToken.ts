import jwt from 'jsonwebtoken';
import { UserInterface } from '../interfaces';

require('dotenv/config');

const createToken = (user: UserInterface) => {
  const secret = process.env.JWT_SECRET as string;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  } as object;

  const token = jwt.sign({ data: { username: user.username } }, secret, jwtConfig);

  return token;
};

export default createToken;