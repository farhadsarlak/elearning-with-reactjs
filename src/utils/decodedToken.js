import jwt from 'jsonwebtoken';

export const decodedToken = token =>(
    jwt.decode(token,{complete:true})
);
